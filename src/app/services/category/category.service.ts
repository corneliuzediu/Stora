import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Category } from '../../../models/category';

@Injectable({
    providedIn: 'root',
})
export class CategoryService {
    private collectionName = 'categories';
    constructor(private firestore: AngularFirestore) {}

    // Create a new category
    addCategory(category: Category): Promise<any> {
        return this.firestore.collection(this.collectionName).add(category);
    }

    // Get all categories
    getCategories(): Observable<any[]> {
        return this.firestore
            .collection<Category>(this.collectionName)
            .valueChanges();
    }

    // Get a single category by ID
    getCategoryById(categoryId: string): Observable<any> {
        return this.firestore
            .collection<Category>(this.collectionName)
            .doc<Category>(categoryId)
            .valueChanges();
    }

    // Update an existing category
    updateCategory(id: string, category: Category): Promise<void> {
        return this.firestore
            .collection(this.collectionName)
            .doc(id)
            .update(category);
    }

    // Delete a category
    deleteCategory(id: string): Promise<void> {
        return this.firestore.collection(this.collectionName).doc(id).delete();
    }
}
