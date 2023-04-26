import GetColor from '../app';

test.each([[10, 'red'], [35, 'yellow'], [90, 'green']])('show color of player lives', (value, color) => {
  const result = GetColor({ name: 'Маг', health: value });
  expect(result).toBe(color);
});
