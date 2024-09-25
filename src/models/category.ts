export class Category {
    public name!: string;
    public id!: string;
    public subcategory!: [];

    constructor() {
        this.id = `${Date.now()}`;
    }
}
