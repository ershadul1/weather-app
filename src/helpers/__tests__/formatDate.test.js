import formatDate from '../formatDate';

test('Format date into Date Month Year', () => {
  const date = '2021-04-22';
  expect(formatDate(date)).toBe('22 Apr 21');
});
