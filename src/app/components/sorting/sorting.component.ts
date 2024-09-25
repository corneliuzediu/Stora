import { Component, ViewChild } from '@angular/core';
import { AddCategoriesDialogComponent } from '../shared/add-categories-dialog/add-categories-dialog.component';
import { Category } from '../../../models/category';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-sorting',
    standalone: true,
    imports: [AddCategoriesDialogComponent, ButtonModule],
    templateUrl: './sorting.component.html',
    styleUrl: './sorting.component.scss',
})
export class SortingComponent {
    @ViewChild(AddCategoriesDialogComponent)
    addCategoryDialog!: AddCategoriesDialogComponent;

    category: Category = new Category();

    constructor() {}

    showCategoryDialog() {
        this.addCategoryDialog.showDialog();
    }

    onCategoryAdded(category: Category) {
        //Do something
    }

    onDialogClosed() {
        console.log(this.category);
    }
}
