import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Product } from '../../../models/product';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    private collectionName = 'products';
    constructor(private firestore: AngularFirestore) {}

    // Create a new product
    addProduct(product: Product): Promise<any> {
        return this.firestore.collection(this.collectionName).add(product);
    }

    // Get all products
    getProducts(): Observable<any[]> {
        return this.firestore
            .collection<Product>(this.collectionName)
            .valueChanges({ idField: 'id' });
    }

    // Get a single product by ID
    getProductById(productId: string): Observable<any> {
        return this.firestore
            .collection(this.collectionName)
            .doc<Product>(productId)
            .valueChanges();
    }

    // Update an existing product
    updateProduct(id: string, product: Product): Promise<void> {
        return this.firestore
            .collection(this.collectionName)
            .doc(id)
            .update(product);
    }

    // Delete a product
    deleteProduct(id: string): Promise<void> {
        return this.firestore.collection(this.collectionName).doc(id).delete();
    }
}
