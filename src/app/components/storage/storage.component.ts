import { Component, ViewChild } from '@angular/core';
import { StorageClass } from '../../../models/storage';
import { AddStorageDialogComponent } from '../shared/add-storage-dialog/add-storage-dialog.component';
import { ButtonModule } from 'primeng/button';
import { FirebaseApp } from '@angular/fire/app';

@Component({
    selector: 'app-storage',
    standalone: true,
    imports: [AddStorageDialogComponent, ButtonModule],
    templateUrl: './storage.component.html',
    styleUrl: './storage.component.scss',
})
export class StorageComponent {
    @ViewChild(AddStorageDialogComponent)
    addStorageDialog!: AddStorageDialogComponent;

    storage: StorageClass = new StorageClass();

    constructor(private firebase: FirebaseApp) {}

    ngOnInit() {
        console.log(this.storage);
    }

    showAddStorageDialog() {
        this.addStorageDialog.showDialog();
    }

    onStorageAdded(storage: StorageClass) {
        console.log(storage);
    }

    onDialogClosed() {
        console.log('Dialog closed');
    }
}
