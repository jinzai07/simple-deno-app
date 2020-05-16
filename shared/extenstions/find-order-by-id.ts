import { orders } from "../../controller/order.controller.ts";

import { Order } from "../models/order.model.ts";

/**
 * finds the order by id from local collection
 * @param id order.id
 * @returns order || undefined
 */
export const getOrderByID = (id: number): Order | undefined => {
    return orders.find(order => order.id === id);
}