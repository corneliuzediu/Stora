import { inject, Injectable, signal } from '@angular/core';
import {
    Auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
    user,
    sendPasswordResetEmail,
} from '@angular/fire/auth';
import { from, Observable } from 'rxjs';
import { UserInterface } from '../../interfaces/user.interface';
import { collection, doc, Firestore, setDoc } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    firebaseAuth = inject(Auth);
    firestore = inject(Firestore);
    user$ = user(this.firebaseAuth);
    currentUserSig = signal<UserInterface | null | undefined>(undefined);

    register(
        email: string,
        username: string,
        password: string
    ): Observable<void> {
        const promise = createUserWithEmailAndPassword(
            this.firebaseAuth,
            email,
            password
        )
            .then(async (response) => {
                const user = response.user;
                const groupDocRef = doc(collection(this.firestore, 'groups'));
                const groupId = groupDocRef.id;

                updateProfile(response.user, { displayName: username });

                //Add user to Firestore
                const userDocRef = doc(this.firestore, `users/${user.uid}`);
                await setDoc(userDocRef, {
                    email: user.email,
                    username: username,
                    groupId: groupId,
                });

                //Create group document in Firestore
                await setDoc(groupDocRef, {
                    groupId: groupId,
                    createdBy: user.uid,
                    members: [user.uid],
                    groupName: `${username}'s Group`,
                    createdAt: new Date(),
                });
            })
            .catch((error) => {
                if (error.code === 'auth/email-already-in-use') {
                    return Promise.reject('This email is already registered.');
                }
                return Promise.reject(error.message);
            });

        return from(promise);
    }

    login(email: string, password: string): Observable<void> {
        const promise = signInWithEmailAndPassword(
            this.firebaseAuth,
            email,
            password
        ).then(() => {});

        return from(promise);
    }

    logout(): Observable<void> {
        const promise = signOut(this.firebaseAuth);
        return from(promise);
    }

    sendPasswordResetEmail(email: string): Observable<void> {
        const promise = sendPasswordResetEmail(this.firebaseAuth, email);
        return from(promise);
    }
}
