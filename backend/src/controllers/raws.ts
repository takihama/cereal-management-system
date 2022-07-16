import express from 'express';

import rawsService from '../services/rawsService';
import utils from '../../utils/utils';

const router = express.Router();

router.get('/:id', (req, res) => {
  const raw = rawsService.findById(Number(req.params.id));

  if (raw) {
    res.send(raw);
  } else {
    res.sendStatus(404);
  }
});

router.get('/', (_req, res) => {
  res.send(rawsService.getEntries());
});

router.post('/', (req, res) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const newRaw = utils.toNewRaw(req.body);

    const addedEntry = rawsService.addRaw(newRaw);
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
