import express from 'express';
import productsRouter from './controllers/products';
import productionOrdersRouter from './controllers/productionOrders';
import rawsRouter from './controllers/raws';

import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3001;

app.get('/ping', (_req, res) => {
  console.log('Someone pinged here');
  res.send('pong');
});

app.use('/api/products', productsRouter);
app.use('/api/productionOrders', productionOrdersRouter);
app.use('/api/raws', rawsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});