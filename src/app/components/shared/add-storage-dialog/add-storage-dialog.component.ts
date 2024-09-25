import { Component, EventEmitter, Output } from '@angular/core';
import { StorageClass } from '../../../../models/storage';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';

@Component({
    selector: 'add-storage-dialog',
    standalone: true,
    imports: [
        CommonModule,
        DialogModule,
        FormsModule,
        ButtonModule,
        InputGroupModule,
    ],
    templateUrl: './add-storage-dialog.component.html',
    styleUrl: './add-storage-dialog.component.scss',
})
export class AddStorageDialogComponent {
    display: boolean = false;
    storage: StorageClass = new StorageClass();

    @Output() storageAdded = new EventEmitter<StorageClass>();
    @Output() dialogClosed = new EventEmitter<void>();

    showDialog() {
        this.display = true;
    }

    hideDialog() {
        this.display = false;
        this.dialogClosed.emit();
    }

    addStorage() {
        this.storageAdded.emit(this.storage);
        this.hideDialog();
    }
}
