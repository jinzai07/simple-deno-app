import { Product } from "../shared/models/product.model.ts";

/**
 * products object fake data
 */
let products: Product[] = [
    {
        id: 1,
        name: 'product 1',
        price: 45
    },
    {
        id: 2,
        name: 'product 2',
        price: 114
    },
    {
        id: 3,
        name: 'product 3',
        price: 21
    },
    {
        id: 4,
        name: 'product 4',
        price: 14
    }
];

export class ProductController {
    static getAll({ response }: { response: any }): void {
        response.body = products;
    }
}