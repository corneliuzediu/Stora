import { Component, Output, EventEmitter } from '@angular/core';
import { Category } from '../../../../models/category';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';

@Component({
    selector: 'add-categories-dialog',
    standalone: true,
    imports: [
        CommonModule,
        DialogModule,
        FormsModule,
        ButtonModule,
        InputGroupModule,
    ],
    templateUrl: './add-categories-dialog.component.html',
    styleUrl: './add-categories-dialog.component.scss',
})
export class AddCategoriesDialogComponent {
    display: boolean = false;
    category: Category = new Category();

    @Output() categoryAdded = new EventEmitter<Category>();
    @Output() dialogClosed = new EventEmitter<void>();

    showDialog() {
        this.display = true;
    }

    hideDialog() {
        this.display = false;
        this.dialogClosed.emit();
    }

    addCategory() {
        this.categoryAdded.emit();
        this.hideDialog();
    }
}
