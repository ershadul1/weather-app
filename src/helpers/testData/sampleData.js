const sampleData = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1619125200,
      main: {
        temp: 280.49,
        feels_like: 280.49,
        temp_min: 276.02,
        temp_max: 280.49,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 962,
        humidity: 42,
        temp_kf: 4.47,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 4,
      },
      wind: {
        speed: 1.07,
        deg: 317,
        gust: 1.81,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-04-22 21:00:00',
    },
    {
      dt: 1619136000,
      main: {
        temp: 277.21,
        feels_like: 277.21,
        temp_min: 274.46,
        temp_max: 277.21,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 962,
        humidity: 59,
        temp_kf: 2.75,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 7,
      },
      wind: {
        speed: 0.34,
        deg: 143,
        gust: 0.55,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-04-23 00:00:00',
    },
    {
      dt: 1619146800,
      main: {
        temp: 273.51,
        feels_like: 273.51,
        temp_min: 273.51,
        temp_max: 273.51,
        pressure: 1027,
        sea_level: 1027,
        grnd_level: 962,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 4,
      },
      wind: {
        speed: 0.63,
        deg: 155,
        gust: 0.58,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-04-23 03:00:00',
    },
    {
      dt: 1619157600,
      main: {
        temp: 277.06,
        feels_like: 277.06,
        temp_min: 277.06,
        temp_max: 277.06,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 964,
        humidity: 63,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 2,
      },
      wind: {
        speed: 0.89,
        deg: 131,
        gust: 1.31,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-04-23 06:00:00',
    },
    {
      dt: 1619168400,
      main: {
        temp: 283.18,
        feels_like: 281.39,
        temp_min: 283.18,
        temp_max: 283.18,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 964,
        humidity: 44,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 1.61,
        deg: 52,
        gust: 1.37,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-04-23 09:00:00',
    },
    {
      dt: 1619179200,
      main: {
        temp: 286.07,
        feels_like: 284.38,
        temp_min: 286.07,
        temp_max: 286.07,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 963,
        humidity: 37,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 2.5,
        deg: 24,
        gust: 2.11,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-04-23 12:00:00',
    },
    {
      dt: 1619190000,
      main: {
        temp: 286.36,
        feels_like: 284.75,
        temp_min: 286.36,
        temp_max: 286.36,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 962,
        humidity: 39,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.75,
        deg: 29,
        gust: 2.3,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-04-23 15:00:00',
    },
    {
      dt: 1619200800,
      main: {
        temp: 281.21,
        feels_like: 280.46,
        temp_min: 281.21,
        temp_max: 281.21,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 962,
        humidity: 63,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.61,
        deg: 62,
        gust: 1.88,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-04-23 18:00:00',
    },
    {
      dt: 1619211600,
      main: {
        temp: 278.04,
        feels_like: 278.04,
        temp_min: 278.04,
        temp_max: 278.04,
        pressure: 1027,
        sea_level: 1027,
        grnd_level: 963,
        humidity: 72,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.1,
        deg: 80,
        gust: 1.27,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-04-23 21:00:00',
    },
    {
      dt: 1619222400,
      main: {
        temp: 276.26,
        feels_like: 276.26,
        temp_min: 276.26,
        temp_max: 276.26,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 962,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 0.74,
        deg: 99,
        gust: 1,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-04-24 00:00:00',
    },
    {
      dt: 1619233200,
      main: {
        temp: 275.1,
        feels_like: 275.1,
        temp_min: 275.1,
        temp_max: 275.1,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 962,
        humidity: 82,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 3,
      },
      wind: {
        speed: 0.51,
        deg: 133,
        gust: 0.77,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-04-24 03:00:00',
    },
    {
      dt: 1619244000,
      main: {
        temp: 278.39,
        feels_like: 278.39,
        temp_min: 278.39,
        temp_max: 278.39,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 962,
        humidity: 70,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 6,
      },
      wind: {
        speed: 0.88,
        deg: 86,
        gust: 1.33,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-04-24 06:00:00',
    },
    {
      dt: 1619254800,
      main: {
        temp: 284.94,
        feels_like: 283.45,
        temp_min: 284.94,
        temp_max: 284.94,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 962,
        humidity: 49,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      ],
      clouds: {
        all: 24,
      },
      wind: {
        speed: 1.98,
        deg: 55,
        gust: 1.85,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-04-24 09:00:00',
    },
    {
      dt: 1619265600,
      main: {
        temp: 288.36,
        feels_like: 286.9,
        temp_min: 288.36,
        temp_max: 288.36,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 960,
        humidity: 37,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      ],
      clouds: {
        all: 22,
      },
      wind: {
        speed: 2.3,
        deg: 26,
        gust: 1.59,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-04-24 12:00:00',
    },
    {
      dt: 1619276400,
      main: {
        temp: 288.39,
        feels_like: 286.99,
        temp_min: 288.39,
        temp_max: 288.39,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 959,
        humidity: 39,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 74,
      },
      wind: {
        speed: 2.84,
        deg: 13,
        gust: 2.4,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-04-24 15:00:00',
    },
    {
      dt: 1619287200,
      main: {
        temp: 282.85,
        feels_like: 282.42,
        temp_min: 282.85,
        temp_max: 282.85,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 959,
        humidity: 61,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 80,
      },
      wind: {
        speed: 1.54,
        deg: 41,
        gust: 2.05,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-04-24 18:00:00',
    },
    {
      dt: 1619298000,
      main: {
        temp: 279.49,
        feels_like: 279.49,
        temp_min: 279.49,
        temp_max: 279.49,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 960,
        humidity: 69,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 54,
      },
      wind: {
        speed: 0.76,
        deg: 333,
        gust: 0.98,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-04-24 21:00:00',
    },
    {
      dt: 1619308800,
      main: {
        temp: 277.35,
        feels_like: 277.35,
        temp_min: 277.35,
        temp_max: 277.35,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 960,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      clouds: {
        all: 46,
      },
      wind: {
        speed: 1.07,
        deg: 310,
        gust: 1.31,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-04-25 00:00:00',
    },
    {
      dt: 1619319600,
      main: {
        temp: 276.48,
        feels_like: 276.48,
        temp_min: 276.48,
        temp_max: 276.48,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 959,
        humidity: 81,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 89,
      },
      wind: {
        speed: 0.64,
        deg: 300,
        gust: 1.08,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-04-25 03:00:00',
    },
    {
      dt: 1619330400,
      main: {
        temp: 278.99,
        feels_like: 278.99,
        temp_min: 278.99,
        temp_max: 278.99,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 960,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 91,
      },
      wind: {
        speed: 1.14,
        deg: 1,
        gust: 1.62,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-04-25 06:00:00',
    },
    {
      dt: 1619341200,
      main: {
        temp: 284.71,
        feels_like: 283.23,
        temp_min: 284.71,
        temp_max: 284.71,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 960,
        humidity: 50,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      ],
      clouds: {
        all: 12,
      },
      wind: {
        speed: 2.45,
        deg: 22,
        gust: 2.3,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-04-25 09:00:00',
    },
    {
      dt: 1619352000,
      main: {
        temp: 287.73,
        feels_like: 286.34,
        temp_min: 287.73,
        temp_max: 287.73,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 959,
        humidity: 42,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 7,
      },
      wind: {
        speed: 2.81,
        deg: 18,
        gust: 2.44,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-04-25 12:00:00',
    },
    {
      dt: 1619362800,
      main: {
        temp: 287.92,
        feels_like: 286.5,
        temp_min: 287.92,
        temp_max: 287.92,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 958,
        humidity: 40,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 6,
      },
      wind: {
        speed: 3.14,
        deg: 34,
        gust: 2.42,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-04-25 15:00:00',
    },
    {
      dt: 1619373600,
      main: {
        temp: 282.67,
        feels_like: 281.38,
        temp_min: 282.67,
        temp_max: 282.67,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 956,
        humidity: 64,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 6,
      },
      wind: {
        speed: 2.54,
        deg: 70,
        gust: 4.96,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-04-25 18:00:00',
    },
    {
      dt: 1619384400,
      main: {
        temp: 279.09,
        feels_like: 277.64,
        temp_min: 279.09,
        temp_max: 279.09,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 956,
        humidity: 70,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 9,
      },
      wind: {
        speed: 1.97,
        deg: 92,
        gust: 2.85,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-04-25 21:00:00',
    },
    {
      dt: 1619395200,
      main: {
        temp: 277.1,
        feels_like: 275.98,
        temp_min: 277.1,
        temp_max: 277.1,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 955,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      clouds: {
        all: 17,
      },
      wind: {
        speed: 1.44,
        deg: 77,
        gust: 1.79,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-04-26 00:00:00',
    },
    {
      dt: 1619406000,
      main: {
        temp: 275.72,
        feels_like: 274.37,
        temp_min: 275.72,
        temp_max: 275.72,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 954,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 77,
      },
      wind: {
        speed: 1.47,
        deg: 74,
        gust: 2.11,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-04-26 03:00:00',
    },
    {
      dt: 1619416800,
      main: {
        temp: 278.63,
        feels_like: 278.63,
        temp_min: 278.63,
        temp_max: 278.63,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 954,
        humidity: 73,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 89,
      },
      wind: {
        speed: 1.32,
        deg: 69,
        gust: 2.06,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-04-26 06:00:00',
    },
    {
      dt: 1619427600,
      main: {
        temp: 284.26,
        feels_like: 282.89,
        temp_min: 284.26,
        temp_max: 284.26,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 954,
        humidity: 56,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.3,
        deg: 71,
        gust: 2.6,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-04-26 09:00:00',
    },
    {
      dt: 1619438400,
      main: {
        temp: 286.86,
        feels_like: 285.51,
        temp_min: 286.86,
        temp_max: 286.86,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 952,
        humidity: 47,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3,
        deg: 54,
        gust: 2.56,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-04-26 12:00:00',
    },
    {
      dt: 1619449200,
      main: {
        temp: 286.93,
        feels_like: 285.59,
        temp_min: 286.93,
        temp_max: 286.93,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 949,
        humidity: 47,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.32,
        deg: 66,
        gust: 3.58,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-04-26 15:00:00',
    },
    {
      dt: 1619460000,
      main: {
        temp: 283.12,
        feels_like: 281.42,
        temp_min: 283.12,
        temp_max: 283.12,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 947,
        humidity: 66,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.37,
        deg: 69,
        gust: 8.34,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-04-26 18:00:00',
    },
    {
      dt: 1619470800,
      main: {
        temp: 281.01,
        feels_like: 278.77,
        temp_min: 281.01,
        temp_max: 281.01,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 945,
        humidity: 70,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.54,
        deg: 73,
        gust: 10.65,
      },
      visibility: 10000,
      pop: 0.08,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-04-26 21:00:00',
    },
    {
      dt: 1619481600,
      main: {
        temp: 279.93,
        feels_like: 277.87,
        temp_min: 279.93,
        temp_max: 279.93,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 943,
        humidity: 92,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.89,
        deg: 75,
        gust: 7.13,
      },
      visibility: 10000,
      pop: 0.53,
      rain: {
        '3h': 0.99,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-04-27 00:00:00',
    },
    {
      dt: 1619492400,
      main: {
        temp: 279.29,
        feels_like: 277.7,
        temp_min: 279.29,
        temp_max: 279.29,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 941,
        humidity: 97,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.15,
        deg: 76,
        gust: 4.92,
      },
      visibility: 10000,
      pop: 0.6,
      rain: {
        '3h': 1.89,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-04-27 03:00:00',
    },
    {
      dt: 1619503200,
      main: {
        temp: 279.78,
        feels_like: 279.78,
        temp_min: 279.78,
        temp_max: 279.78,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 941,
        humidity: 97,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.18,
        deg: 57,
        gust: 1.81,
      },
      visibility: 10000,
      pop: 0.74,
      rain: {
        '3h': 1.75,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-04-27 06:00:00',
    },
    {
      dt: 1619514000,
      main: {
        temp: 280.91,
        feels_like: 280.91,
        temp_min: 280.91,
        temp_max: 280.91,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 941,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.76,
        deg: 8,
        gust: 1,
      },
      visibility: 10000,
      pop: 0.62,
      rain: {
        '3h': 0.64,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-04-27 09:00:00',
    },
    {
      dt: 1619524800,
      main: {
        temp: 283.7,
        feels_like: 282.98,
        temp_min: 283.7,
        temp_max: 283.7,
        pressure: 1001,
        sea_level: 1001,
        grnd_level: 940,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.16,
        deg: 15,
        gust: 2.04,
      },
      visibility: 10000,
      pop: 0.49,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-04-27 12:00:00',
    },
    {
      dt: 1619535600,
      main: {
        temp: 284.01,
        feels_like: 283.27,
        temp_min: 284.01,
        temp_max: 284.01,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 939,
        humidity: 81,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.43,
        deg: 349,
        gust: 2.71,
      },
      visibility: 10000,
      pop: 0.04,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-04-27 15:00:00',
    },
    {
      dt: 1619546400,
      main: {
        temp: 281.14,
        feels_like: 279.69,
        temp_min: 281.14,
        temp_max: 281.14,
        pressure: 1001,
        sea_level: 1001,
        grnd_level: 939,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.37,
        deg: 314,
        gust: 4.17,
      },
      visibility: 10000,
      pop: 0.5,
      rain: {
        '3h': 0.29,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-04-27 18:00:00',
    },
  ],
  city: {
    id: 2867714,
    name: 'Munich',
    coord: {
      lat: 48.1374,
      lon: 11.5755,
    },
    country: 'DE',
    population: 1260391,
    timezone: 7200,
    sunrise: 1619064637,
    sunset: 1619115203,
  },
};

export default sampleData;
