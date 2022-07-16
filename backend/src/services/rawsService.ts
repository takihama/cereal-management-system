import rawsData from '../../data/raws';
import { NewRaw, Raw } from '../../types';

const getEntries = (): Array<Raw> => {
  return rawsData;
};

const addRaw = (entry: NewRaw) => {
  const newRaw = {
    id: Math.max(...rawsData.map(d => d.id)) + 1,
    ...entry
  };

  rawsData.push(newRaw);
  return newRaw;
};

const findById = (id: number): Raw | undefined => {
  const entry = rawsData.find(p => p.id === id);
  return entry;
};

export default {
  getEntries,
  addRaw,
  findById
};
