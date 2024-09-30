import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
    FormBuilder,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';

@Component({
    selector: 'app-registration',
    standalone: true,
    imports: [
        FormsModule,
        CommonModule,
        FloatLabelModule,
        ReactiveFormsModule,
        ButtonModule,
        InputTextModule,
        PasswordModule,
    ],
    templateUrl: './registration.component.html',
    styleUrl: './registration.component.scss',
})
export class RegistrationComponent {
    fb = inject(FormBuilder);
    http = inject(HttpClient);
    authService = inject(AuthService);
    router = inject(Router);

    form = this.fb.nonNullable.group({
        username: [''],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        verify_password: ['', [Validators.required, Validators.minLength(8)]],
    });

    errorMessage: string | null = null;

    onSubmit(): void {
        const rawForm = this.form.getRawValue();
        if (rawForm.password === rawForm.verify_password) {
            this.authService
                .register(rawForm.email, rawForm.username, rawForm.password)
                .subscribe({
                    next: () => {
                        this.router.navigateByUrl('');
                    },
                    error: (err) => {
                        this.errorMessage = err;
                    },
                });
        } else if (rawForm.password !== rawForm.verify_password) {
            this.errorMessage = 'Please add the same password';
        } else {
            console.log('Password is not the same');
            console.log('p', rawForm.password);
            console.log('p2', rawForm.verify_password);
        }
    }

    goToLogin(){
        this.router.navigateByUrl('login')
    }
}
