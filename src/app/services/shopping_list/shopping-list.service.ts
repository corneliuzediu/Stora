import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ShoppingList } from '../../../models/shoppingList';

@Injectable({
    providedIn: 'root',
})
export class ShoppingListService {
    private collectionName = 'shopping_lists';
    constructor(private firestore: AngularFirestore) {}

    // Create a new shopping_list
    addShoppingList(shopping_list: ShoppingList): Promise<any> {
        return this.firestore
            .collection(this.collectionName)
            .add(shopping_list);
    }

    // Get all shopping_lists
    getShoppingLists(): Observable<any[]> {
        return this.firestore
            .collection<ShoppingList>(this.collectionName)
            .valueChanges();
    }

    // Get a single shopping_list by ID
    getShoppingListById(shopping_listId: string): Observable<any> {
        return this.firestore
            .collection(this.collectionName)
            .doc<ShoppingList>(shopping_listId)
            .valueChanges();
    }

    // Update an existing shopping_list
    updateShoppingList(id: string, shopping_list: ShoppingList): Promise<void> {
        return this.firestore
            .collection(this.collectionName)
            .doc(id)
            .update(shopping_list);
    }

    // Delete a shopping_list
    deleteShoppingList(id: string): Promise<void> {
        return this.firestore.collection(this.collectionName).doc(id).delete();
    }
}
