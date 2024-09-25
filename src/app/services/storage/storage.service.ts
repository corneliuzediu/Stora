import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { StorageClass } from '../../../models/storage';
import { Product } from '../../../models/product';

@Injectable({
    providedIn: 'root',
})
export class StorageService {
    private collectionName = 'storages';
    constructor(private firestore: AngularFirestore) {}

    // Create a new storage
    addStorage(storage: {
        name: string;
        id: string;
        createdTime: string;
        listProducts: Product[];
    }): Promise<any> {
        return this.firestore.collection(this.collectionName).add(storage);
    }

    // Get all storages
    getStorages(): Observable<any[]> {
        return this.firestore
            .collection<StorageClass>(this.collectionName)
            .valueChanges();
    }

    // Get a single storage by ID
    getStorageById(storageId: string): Observable<any> {
        return this.firestore
            .collection(this.collectionName)
            .doc<StorageClass>(storageId)
            .valueChanges();
    }

    // Update an existing storage
    updateStorage(id: string, storage: StorageClass): Promise<void> {
        return this.firestore
            .collection(this.collectionName)
            .doc(id)
            .update(storage);
    }

    // Delete a storage
    deleteStorage(id: string): Promise<void> {
        return this.firestore.collection(this.collectionName).doc(id).delete();
    }
}
