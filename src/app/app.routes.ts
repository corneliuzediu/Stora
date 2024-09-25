import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StorageComponent } from './components/storage/storage.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { SortingComponent } from './components/sorting/sorting.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'storage', component: StorageComponent },
    { path: 'shopping', component: ShoppingComponent },
    { path: 'sort', component: SortingComponent },
];
