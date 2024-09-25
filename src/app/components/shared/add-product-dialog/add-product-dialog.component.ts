import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../../../models/product';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { CascadeSelectModule } from 'primeng/cascadeselect';

@Component({
    selector: 'add-product-dialog',
    standalone: true,
    imports: [
        DialogModule,
        CommonModule,
        FormsModule,
        ButtonModule,
        InputGroupModule,
        CascadeSelectModule,
    ],
    templateUrl: './add-product-dialog.component.html',
    styleUrl: './add-product-dialog.component.scss',
})
export class AddProductDialogComponent {
    display: boolean = false;
    product: Product = new Product();

    @Output() productAdded = new EventEmitter<Product>();
    @Output() dialogClosed = new EventEmitter<void>();

    categories: any[] = [
        {
            cname: 'Bathroom',
            subcategories: [
                {
                    name: 'cleaning',
                },
                {
                    name: 'usable',
                },
            ],
        },
        {
            cname: 'Kitchen',
            subcategories: [
                {
                    name: 'cleaning',
                },
                {
                    name: 'usable',
                },
            ],
        },
    ];

    showDialog() {
        this.display = true;
    }

    hideDialog() {
        this.display = false;
        this.dialogClosed.emit();
    }

    addProduct() {
        this.productAdded.emit(this.product);
        this.hideDialog();
    }
}
