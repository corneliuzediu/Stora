import { Component, ViewChild } from '@angular/core';
import { AddShoppingListDialogComponent } from '../shared/add-shopping-list-dialog/add-shopping-list-dialog.component';
import { ShoppingList } from '../../../models/shoppingList';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-shopping',
    standalone: true,
    imports: [AddShoppingListDialogComponent, ButtonModule],
    templateUrl: './shopping.component.html',
    styleUrl: './shopping.component.scss',
})
export class ShoppingComponent {
    @ViewChild(AddShoppingListDialogComponent)
    addShoppingListDialog!: AddShoppingListDialogComponent;

    shopping_list: ShoppingList = new ShoppingList();

    constructor() {}

    showAddShoppingListDialog() {
        this.addShoppingListDialog.showDialog();
    }

    onShoppingListAdded(shopping_list: ShoppingList) {
        //Do something
    }

    onDialogClosed() {
        console.log(this.shopping_list);
    }
}
