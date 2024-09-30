import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StorageComponent } from './components/storage/storage.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { SortingComponent } from './components/sorting/sorting.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { LoginComponent } from './authentication/login/login.component';
import { AccountComponent } from './components/account/account.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegistrationComponent },
    { path: '', component: HomeComponent },
    { path: 'storage', component: StorageComponent },
    { path: 'shopping', component: ShoppingComponent },
    { path: 'sort', component: SortingComponent },
    { path: 'account', component: AccountComponent },
];
