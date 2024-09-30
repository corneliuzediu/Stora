import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import {
    FormBuilder,
    FormControl,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { CommonModule, formatDate } from '@angular/common';
import { FirestoreCRUDService } from '../../services/firestoreCRUD/firestore-crud.service';
import { Subscription } from 'rxjs';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-account',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        CommonModule,
        FloatLabelModule,
        InputTextModule,
        ButtonModule,
    ],
    templateUrl: './account.component.html',
    styleUrl: './account.component.scss',
})
export class AccountComponent {
    authService = inject(AuthService);
    firestoreService = inject(FirestoreCRUDService);
    fb = inject(FormBuilder);

    user!: any;
    groupId!: string;

    private substriptions: Subscription[] = [];

    accountForm = this.fb.group({
        username: ['', Validators.required],
        groupName: ['', Validators.required],
    });

    inviteEmailControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);

    ngOnInit(): void {
        const userSub = this.authService.user$.subscribe((user: any) => {
            if (user) {
                this.user = user;

                const userDataSub = this.firestoreService
                    .getUserData(user.uid)
                    .subscribe((userData) => {
                        if (userData) {
                            console.log(user);
                            this.groupId = userData.groupId;

                            const groupDataSub = this.firestoreService
                                .getGroupData(this.groupId)
                                .subscribe((groupData) => {
                                    if (groupData) {
                                        this.accountForm.patchValue({
                                            username: userData.username || '',
                                            groupName:
                                                groupData.groupName || '',
                                        });
                                    }
                                });
                            this.substriptions.push(groupDataSub);
                        }
                    });
                this.substriptions.push(userDataSub);
            }
        });
        this.substriptions.push(userSub);
    }

    ngOnDestroy(): void {
        this.substriptions.forEach((sub) => sub.unsubscribe());
    }

    onSubmit(): void {
        const formValues = this.accountForm.value;
        debugger;
        if (this.user && this.groupId) {
            this.firestoreService.saveUserData(this.user, {
                username: formValues.username,
            });
            this.firestoreService.saveGroupData(this.groupId, {
                groupName: formValues.groupName,
            });
        }
    }

    addMember() {
        if (this.inviteEmailControl.valid) {
            const inviteEmail = this.inviteEmailControl.value;
            // Perform actions to invite the new member by email
            console.log('Invite email:', inviteEmail);

            // Optionally reset the form control after inviting
            this.inviteEmailControl.reset();
        }
    }
}
