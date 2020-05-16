import { Router } from 'https://deno.land/x/oak/mod.ts';

import { ProductController } from '../controller/product.controller.ts';

const router = new Router();

/**
 * initializes products routes
 */
router.get('/products', ProductController.getAll)

export default router;