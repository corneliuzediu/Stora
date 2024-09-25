import { Component, EventEmitter, Output } from '@angular/core';
import { ShoppingList } from '../../../../models/shoppingList';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';

@Component({
    selector: 'add-shopping-list-dialog',
    standalone: true,
    imports: [
        CommonModule,
        DialogModule,
        FormsModule,
        ButtonModule,
        InputGroupModule,
    ],
    templateUrl: './add-shopping-list-dialog.component.html',
    styleUrl: './add-shopping-list-dialog.component.scss',
})
export class AddShoppingListDialogComponent {
    display: boolean = false;
    shopping_list: ShoppingList = new ShoppingList();

    @Output() shoppingListAdded = new EventEmitter<ShoppingList>();
    @Output() dialogClosed = new EventEmitter<void>();

    showDialog() {
        this.display = true;
    }

    hideDialog() {
        this.display = false;
        this.dialogClosed.emit();
    }

    addShoppingList() {
        this.shoppingListAdded.emit(this.shopping_list);
        this.hideDialog();
    }
}
