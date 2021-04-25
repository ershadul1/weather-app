const convertToCelsius = (val) => {
  const res = `${(val - 273.15).toFixed(0)}`;
  return res;
};

const convertToFareheit = (val) => {
  const res = `${((val - 273.15) * (9 / 5) + 32).toFixed(0)}`;
  return res;
};

const convert = (scale) => {
  if (scale === 'C') {
    return convertToCelsius;
  }

  return convertToFareheit;
};

export default convert;
