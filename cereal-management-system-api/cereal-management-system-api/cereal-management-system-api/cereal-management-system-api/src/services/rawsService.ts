import rawsData from '../../data/raws.json';
import { NewRaw, Raw } from '../../types';

const raws: Array<Raw> = rawsData;

const getEntries = (): Array<Raw> => {
  return raws;
};

const addRaw = (entry: NewRaw) => {
  const newRaw = {
    id: Math.max(...raws.map(d => d.id)) + 1,
    ...entry
  };

  raws.push(newRaw);
  return newRaw;
};

const findById = (id: number): Raw | undefined => {
  const entry = raws.find(p => p.id === id);
  return entry;
};

export default {
  getEntries,
  addRaw,
  findById
};
