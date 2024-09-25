import { Component, ViewChild } from '@angular/core';
import { StorageClass } from '../../../models/storage';
import { AddStorageDialogComponent } from '../shared/add-storage-dialog/add-storage-dialog.component';
import { ButtonModule } from 'primeng/button';
import { FirebaseApp } from '@angular/fire/app';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { StorageService } from '../../services/storage/storage.service';

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
    storages!: StorageClass[];

    constructor(private storageService: StorageService) {}

    ngOnInit() {
        this.storageService.getStorages().subscribe((data: StorageClass[]) => {
            this.storages = data;
            console.log(this.storages);
        });
    }

    showAddStorageDialog() {
        this.addStorageDialog.showDialog();
    }

    onStorageAdded(storageName: string) {
        let newStorage = new StorageClass();
        newStorage.name = storageName;
        this.storageService.addStorage(newStorage.toJSON());
    }

    onDialogClosed() {
        console.log('Dialog closed');
    }
}
