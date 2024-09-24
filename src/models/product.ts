export class Product {
    public name!: string;
    public id!: string;
    public amount!: number;
    public inTime!: number;
    public expirationDate!: string;
    public storedLocation!: string;
    public category!: string;
    public subcategory!: string;
    public details!: string;

    constructor() {
        this.id = `${Date.now()}`;
    }
}
