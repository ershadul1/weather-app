const parsedData = {
  dailyData: [
    ["2021-04-22", 280],
    ["2021-04-23", 280],
    ["2021-04-24", 282],
    ["2021-04-25", 282],
    ["2021-04-26", 282],
    ["2021-04-27", 281],
  ],
  hourlyData: {
      '2021-04-22': { temp: [ 280.49 ] },
      '2021-04-23': {
        temp: [
          277.21, 273.51,
          277.06, 283.18,
          286.07, 286.36,
          281.21, 278.04
        ]
      },
      '2021-04-24': {
        temp: [
          276.26,  275.1,
          278.39, 284.94,
          288.36, 288.39,
          282.85, 279.49
        ]
      },
      '2021-04-25': {
        temp: [
          277.35, 276.48,
          278.99, 284.71,
          287.73, 287.92,
          282.67, 279.09
        ]
      },
      '2021-04-26': {
        temp: [
           277.1, 275.72,
          278.63, 284.26,
          286.86, 286.93,
          283.12, 281.01
        ]
      },
      '2021-04-27': {
        temp: [
          279.93, 279.29,
          279.78, 280.91,
           283.7, 284.01,
          281.14
        ]
      }
    }
};

export default parsedData;
