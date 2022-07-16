import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import path from 'path';

import productsRouter from './controllers/products';
import productionOrdersRouter from './controllers/productionOrders';
import rawsRouter from './controllers/raws';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '..', 'build')));

const PORT = process.env.PORT || 3001;

app.get('/ping', (_req, res) => {
  console.log('Someone pinged here');
  res.send('pong');
});

app.use('/api/products', productsRouter);
app.use('/api/productionOrders', productionOrdersRouter);
app.use('/api/raws', rawsRouter);

app.get('/*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});