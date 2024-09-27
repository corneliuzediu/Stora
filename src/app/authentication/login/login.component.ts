import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
        ButtonModule,
        ReactiveFormsModule,
        FloatLabelModule,
        CommonModule,
        InputTextModule,
        PasswordModule,
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
})
export class LoginComponent {
    fb = inject(FormBuilder);
    http = inject(HttpClient);
    authService = inject(AuthService);
    router = inject(Router);

    form = this.fb.nonNullable.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
    });

    errorMessage: string | null = null;

    onSubmit(): void {
        const rawForm = this.form.getRawValue();
        this.authService.login(rawForm.email, rawForm.password).subscribe({
            next: () => {
                this.router.navigateByUrl('/');
            },
            error: (err) => {
                this.errorMessage = 'Please add valid log in data or register.';
                console.log(err.code);
            },
        });
    }

    goToRegistration() {
        this.router.navigateByUrl('/register');
    }
}
