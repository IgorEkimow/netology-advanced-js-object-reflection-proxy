import { expect } from '@jest/globals';
import sortingProperties from '../objectSort';

test('expected sorting elements properties', () => {
  const elements = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const received = sortingProperties(elements, ['name', 'level']);
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(received).toEqual(expected);
});
