import { inject, Injectable } from '@angular/core';
import { doc, docData, Firestore, setDoc } from '@angular/fire/firestore';
import { UserInterface } from '../../interfaces/user.interface';
import { merge, Observable } from 'rxjs';
import { GroupInterface } from '../../interfaces/group.interface';
import { updateProfile, User } from '@angular/fire/auth';

@Injectable({
    providedIn: 'root',
})
export class FirestoreCRUDService {
    firestore = inject(Firestore);

    // Create or update user data in Firestore
    saveUserData(user: User, data: Partial<UserInterface>): Promise<void> {
        const userDocRef = doc(this.firestore, `users/${user.uid}`);

        // Update the Firestore document with the user's data
        const firestoreUpdate = setDoc(userDocRef, data, { merge: true });

        // Update the user's Firebase Authentication profile (displayName, etc.)
        const authProfileUpdate = updateProfile(user, {
            displayName: data.username,
        });

        // Return a combined promise for both updates
        return Promise.all([firestoreUpdate, authProfileUpdate]).then(
            () => void 0
        );
    }

    // Fetch user data from Firestore
    getUserData(userId: string): Observable<any | undefined> {
        const userDocRef = doc(this.firestore, `users/${userId}`);
        return docData(userDocRef) as Observable<any | undefined>;
    }

    // Create or update grup data in Firestore
    saveGroupData(
        groupId: string,
        data: Partial<GroupInterface>
    ): Promise<void> {
        const groupDocRef = doc(this.firestore, `groups/${groupId}`);
        return setDoc(groupDocRef, data, { merge: true });
    }

    // Fetch group data from Firestore
    getGroupData(groupId: string): Observable<any> {
        const groupDocRef = doc(this.firestore, `groups/${groupId}`);
        return docData(groupDocRef);
    }
}
