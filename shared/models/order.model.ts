import { Product } from './product.model.ts';

export interface Order {
    id: number;
    product: Product;
    quantity: number;
}