import express from 'express';

import productionOrdersService from '../services/productionOrdersService';
import utils from '../../utils/utils';

const router = express.Router();

router.get('/:id', (req, res) => {
  const productionOrder = productionOrdersService.findById(Number(req.params.id));

  if (productionOrder) {
    res.send(productionOrder);
  } else {
    res.sendStatus(404);
  }
});

router.get('/', (_req, res) => {
  res.send(productionOrdersService.getEntries());
});

router.post('/', (req, res) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const newProductionOrder = utils.toNewProductionOrder(req.body);

    const addedEntry = productionOrdersService.addProductionOrder(newProductionOrder);
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
