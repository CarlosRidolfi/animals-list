import { Animal } from './types'
import React from 'react';

export const initialAnimals: Animal[] = [
  {
    id: 1,
    type: 'duck',
    name: 'Stinky',
  },
  {
    id: 2,
    type: 'cow',
    name: 'Spotty',
  },
  {
    id: 3,
    type: 'sheep',
    name: 'Wooly',
  }
]

export const AnimalsContext = React.createContext(initialAnimals);
