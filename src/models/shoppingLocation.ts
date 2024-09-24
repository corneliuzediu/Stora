import { Product } from './product';

export class ShoppingLocation {
    public name!: string;
    public id: string;
    public createdTime!: string;
    public listProducts!: Product[];

    constructor() {
        this.id = `${Date.now()}`;
    }
}
