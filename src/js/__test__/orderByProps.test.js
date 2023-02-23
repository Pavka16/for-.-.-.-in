import orderByProps from '../orderByProps';

test('Normal', () => {
  const obj = {
    name: 'Zombie', health: 100, level: 1, attack: 40, defense: 10,
  };
  const arr = ['name', 'level'];
  const expected = orderByProps(obj, arr);
  const received = [
    { key: 'name', value: 'Zombie' },
    { key: 'level', value: 1 },
    { key: 'attack', value: 40 },
    { key: 'defense', value: 10 },
    { key: 'health', value: 100 },
  ];
  expect(expected).toEqual(received);
});

test('Unknown property', () => {
  const obj = {
    name: 'Zombie', health: 10, level: 2, attack: 48, defense: 12,
  };
  const arr = ['name', 'surname'];
  const expected = orderByProps(obj, arr);
  const received = [
    { key: 'name', value: 'Zombie' },
    { key: 'attack', value: 48 },
    { key: 'defense', value: 12 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
  ];
  expect(expected).toEqual(received);
});

test('Check order', () => {
  const obj = {
    name: 'Zombie', level: 1, health: 100, attack: 40, defense: 10,
  };
  const arr = ['defense', 'level', 'attack', 'health', 'name'];
  const expected = orderByProps(obj, arr);
  const received = [
    { key: 'defense', value: 10 },
    { key: 'level', value: 1 },
    { key: 'attack', value: 40 },
    { key: 'health', value: 100 },
    { key: 'name', value: 'Zombie' },
  ];
  expect(expected).toEqual(received);
});

test('Check alphabet', () => {
  const obj = {
    name: 'Zombie', level: 2, health: 15, defense: 12, attack: 48,
  };
  const arr = [];
  const expected = orderByProps(obj, arr);
  const received = [
    { key: 'attack', value: 48 },
    { key: 'defense', value: 12 },
    { key: 'health', value: 15 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'Zombie' },
  ];
  expect(expected).toEqual(received);
});
