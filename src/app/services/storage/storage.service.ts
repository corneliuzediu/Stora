import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { StorageClass } from '../../../models/storage';

@Injectable({
    providedIn: 'root',
})
export class StorageService {
    private collectionName = 'storages';
    constructor(private firestore: AngularFirestore) {}

    // Create a new storage
    addStorage(storage: StorageClass): Promise<any> {
        return this.firestore.collection(this.collectionName).add(storage);
    }

    // Get all storages
    getStorages(): Observable<any[]> {
        return this.firestore
            .collection<Storage>(this.collectionName)
            .valueChanges({ idField: 'id' });
    }

    // Get a single storage by ID
    getStorageById(storageId: string): Observable<any> {
        return this.firestore
            .collection(this.collectionName)
            .doc<Storage>(storageId)
            .valueChanges();
    }

    // Update an existing storage
    updateStorage(id: string, storage: Storage): Promise<void> {
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
