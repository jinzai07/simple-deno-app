import { orders } from "../../controller/order.controller.ts";

import { Order } from "../models/order.model.ts";

export const getOrderByID = (id: number): Order | undefined => {
    return orders.find(order => order.id === id);
}