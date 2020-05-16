import { Order } from '../shared/models/order.model.ts';
import { Product } from '../shared/models/product.model.ts';

import { getOrderByID } from '../shared/extenstions/find-order-by-id.ts';

/**
 * sample fake data for orders
 */
export let orders: Order[] = [
    {
        id: 1,
        product: {
            id: 1,
            name: 'sample product 1',
            price: 5
        },
        quantity: 4
    },
    {
        id: 2,
        product: {
            id: 1,
            name: 'sample product 2',
            price: 69
        },
        quantity: 42
    }
]

export class OrderController {

    static getAll({ response }: { response: any }): void {
        response.body = orders;
    }

    static async createOne({ request, response }: { request: any; response: any }): Promise<any> {
        const ids = orders.map(order => order.id);
        const id = Math.max(...ids) + 1;
        const body = await request.body();
        const order: Order = {
            ...body.value,
            id
        };

        orders.push(order);
        response.body = { message: 'New Order created!', order };
        response.status = 200;
    }

    static getOne({ params, response }: { params: { id: string }; response: any }) {
        const order: Order | undefined = getOrderByID(+params.id);
        if (!!order) {
            response.status = 200;
            response.body = order;
            return;
        }
        response.status = 404;
        response.body = { message: 'Order not found!' };
    }

    static async updateOne({ params, request, response }: { params: { id: string }; request: any; response: any }): Promise<any> {
        let order: Order | undefined = getOrderByID(+params.id);

        if (!!order) {
            const body = await request.body();
            const updateInfos: { quantity: number, product: Product} = body.value;
            order = { id: order.id, ...updateInfos };
            orders = [...orders.filter(order => order.id !== +params.id), order];
            response.status = 200;
            response.body = { message: 'Order edited successfully!', order };
            return;
        }
        response.status = 404;
        response.body = { message: 'Order not found!' };
    }

    static deleteOne({ params, response }: { params: { id: string }; response: any }): void {
        let order: Order | undefined = getOrderByID(+params.id);
        if (!!order) {
            const index = orders.findIndex(order => order.id === +params.id);
            orders.splice(index, 1);
            response.status = 200;
            response.body = { message: 'Order deleted successfully!' };
            return;
        }
        response.status = 404;
        response.message = { message: 'Order not found!' };
    }

    static addID(body: Order): Order {
        const ids = orders.map(order => order.id);
        const id = Math.max(...ids) + 1;
        return {
            ...body,
            id
        };
    }

}