import { Component, ViewChild } from '@angular/core';
import { Product } from '../../../models/product';
import { AddProductDialogComponent } from '../shared/add-product-dialog/add-product-dialog.component';
import { ButtonModule } from 'primeng/button';

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

    constructor() {}

    ngOnInit() {
        console.log(this.product);
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
