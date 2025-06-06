import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(response => response.json());
}

export const get5First = (): Promise<Good[]> => {
  return getAll().then(goods =>
    [...goods].sort((g1, g2) => g1.name.localeCompare(g2.name)).slice(0, 5),
  );
};

export const getRed = () => {
  return getAll().then(goods => goods.filter(good => good.color === 'red'));
};
