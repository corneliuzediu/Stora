import { Product } from './product';

export class StorageClass {
    public name!: string;
    public id: string;
    public createdTime!: string;
    public listProducts!: Product[];

    constructor() {
        this.id = `${Date.now()}`;
        this.createdTime = new Date().toISOString();
        this.listProducts = [];
    }

    toJSON() {
        return {
            name: this.name,
            id: this.id,
            createdTime: this.createdTime,
            listProducts: this.listProducts,
        };
    }
}
