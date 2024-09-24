import { Component } from '@angular/core';
import { Product } from '../../../models/product';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {
    product: Product = new Product();

    constructor() {}

    ngOnInit() {
        console.log(this.product);
    }
}
