import unitConversion from '../unitConversion';

test('Convert kelvin temp into celcius', () => {
  expect(unitConversion('C')(298)).toBe('25');
});

test('Convert kelvin temp into fahrenheit', () => {
  expect(unitConversion('F')(298)).toBe('77');
});
