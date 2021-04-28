import parseWeatherData from '../parseCardData';
import sampleData from '../testData/sampleData';
import parsedData from '../testData/parsedData';

test('Restructure fetched API data into simple structure', () => {
  expect(parseWeatherData(sampleData)).toStrictEqual(parsedData);
});
