import { Router } from 'https://deno.land/x/oak/mod.ts';
import { OrderController, orders } from '../controller/order.controller.ts';

const router = new Router();

router
    .get('/orders', OrderController.getAll)
    .get('/orders/:id', OrderController.getOne)
    .post('/orders', OrderController.createOne)
    .put('/orders/:id', OrderController.updateOne)
    .delete('/orders/:id', OrderController.deleteOne)

export default router;