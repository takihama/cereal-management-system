import express from 'express';

import productsService from '../services/productsService';
import utils from '../../utils/utils';

const router = express.Router();

router.get('/:id', (req, res) => {
  const product = productsService.findById(Number(req.params.id));

  if (product) {
    res.send(product);
  } else {
    res.sendStatus(404);
  }
});

router.get('/', (_req, res) => {
  res.send(productsService.getEntries());
});

router.post('/', (req, res) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const newProduct = utils.toNewProduct(req.body);

    const addedEntry = productsService.addProduct(newProduct);
    res.json(addedEntry);
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

export default router;