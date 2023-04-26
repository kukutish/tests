import GetColor from "../app";

test('show color of player lives', () => {
  let result = GetColor({name: 'Маг', health: 90})
  expect(result).toBe('green');
})