const parseData = (data) => {
  const store = {};
  const { list } = data;
  for (let i = 0; i < list.length; i += 1) {
    const date = list[i].dt_txt.split(' ')[0];
    if (!store[date]) {
      store[date] = {
        temp: [list[i].main.temp],
        humidity: [list[i].main.humidity],
      };
    } else {
      store[date].temp.push(list[i].main.temp);
      store[date].humidity.push(list[i].main.humidity);
    }
  }
  return store;
};

const avgData = (store) => {
  const arr = [];
  Object.keys(store).forEach((key) => {
    let temperature = 0;
    store[key].temp.forEach((element) => {
      temperature += element;
    });
    const avgTemp = temperature / store[key].temp.length;

    let humidity = 0;
    store[key].humidity.forEach((element) => {
      humidity += element;
    });
    const avgHumidity = humidity / store[key].temp.length;
    arr.push([key, Math.round(avgTemp), Math.round(avgHumidity)]);
  });
  return arr;
};

const parseWeatherData = (data) => {
  const weatherData = parseData(data);
  return {
    hourlyData: weatherData,
    dailyData: avgData(weatherData),
  };
};

export default parseWeatherData;
