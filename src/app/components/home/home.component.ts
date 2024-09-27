import { Component, inject, ViewChild } from '@angular/core';
import { Product } from '../../../models/product';
import { AddProductDialogComponent } from '../shared/add-product-dialog/add-product-dialog.component';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [AddProductDialogComponent, ButtonModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {
    @ViewChild(AddProductDialogComponent)
    addProductDialog!: AddProductDialogComponent;

    product: Product = new Product();
    products: Product[] = [];
    authService = inject(AuthService);
    router = inject(Router);

    constructor() {}

    ngOnInit() {
        this.authService.user$.subscribe((user: any) => {
            if (user) {
                this.authService.currentUserSig.set({
                    email: user.email!,
                    username: user.displayName!,
                });
            } else {
                this.authService.currentUserSig.set(null);
                this.router.navigateByUrl('login');
            }
            console.log(this.authService.currentUserSig());
        });
    }

    showAddProductDialog() {
        this.addProductDialog.showDialog(); // Open the dialog
    }

    onProductAdded(product: Product) {
        // Do something
    }

    onDialogClosed() {
        console.log('Dialog closed');
    }
}
