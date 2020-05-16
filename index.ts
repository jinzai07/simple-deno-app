import { Application } from 'https://deno.land/x/oak/mod.ts';

import orderRoutes from './routes/order.route.ts';
import productRoutes from './routes/product.route.ts';

const env = Deno.env.toObject();
const HOST = env.HOST || '127.0.0.1';
const PORT = env.PORT || 3000;

const app = new Application();

app.use(orderRoutes.routes());
app.use(productRoutes.routes());

console.log(`Listening on port ${PORT} ...`);
await app.listen(`${HOST}:${PORT}`);