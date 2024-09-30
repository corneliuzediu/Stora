import { Component, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import { AuthService } from '../../services/auth/auth.service';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [TabMenuModule, ButtonModule, CommonModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    authService = inject(AuthService);
    router = inject(Router);
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.authService.user$.subscribe((user: any) => {
            if (user) {
                this.authService.currentUserSig.set({
                    email: user.email!,
                    username: user.displayName!,
                });
            } else {
                this.authService.currentUserSig.set(null);
            }
            // console.log(this.authService.currentUserSig());
        });

        this.items = [
            { label: 'Home', icon: 'pi pi-home', routerLink: '/' },
            {
                label: 'Storage',
                icon: 'pi pi-box',
                routerLink: 'storage',
            },
            { label: 'Shopping', icon: 'pi pi-list', routerLink: 'shopping' },
            { label: 'Sort', icon: 'pi pi-sort', routerLink: 'sort' },
            { label: 'Account', icon: 'pi pi-user', routerLink: 'account' },
        ];
    }

    logIn() {
        this.router.navigateByUrl('login');
    }

    logOut() {
        this.authService.logout();
        this.router.navigateByUrl('login');
    }
}
