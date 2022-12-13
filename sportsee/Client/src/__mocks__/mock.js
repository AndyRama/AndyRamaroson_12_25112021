export async function getUser(id) {
  const data = {
    id: 19,
    userInfos: {
      firstName: 'Andy',
      lastName: 'Ramaroson',
      age: 37,
    },
    todayScore: 0.8,
    keyData: {
      calorieCount: 3000,
      proteinCount: 255,
      carbohydrateCount: 900,
      lipidCount: 280,
    },
  }

  // console.log(data)
  return data
}

export async function getActivity(id) {
  const data = {
    userId: 19,
    sessions: [
      {
        day: '2020-07-01',
        kilogram: 80,
        calories: 240,
      },
      {
        day: '2020-07-02',
        kilogram: 80,
        calories: 220,
      },
      {
        day: '2020-07-03',
        kilogram: 81,
        calories: 280,
      },
      {
        day: '2020-07-04',
        kilogram: 81,
        calories: 290,
      },
      {
        day: '2020-07-05',
        kilogram: 80,
        calories: 200,
      },
      {
        day: '2020-07-06',
        kilogram: 78,
        calories: 262,
      },
      {
        day: '2020-07-07',
        kilogram: 76,
        calories: 590,
      },
    ],
  }
  return data
}

export async function getAverage(id) {
  const data = {
    userId: 19,
    sessions: [
      {
        day: 1,
        sessionLength: 30,
      },
      {
        day: 2,
        sessionLength: 23,
      },
      {
        day: 3,
        sessionLength: 45,
      },
      {
        day: 4,
        sessionLength: 50,
      },
      {
        day: 5,
        sessionLength: 40,
      },
      {
        day: 6,
        sessionLength: 45,
      },
      {
        day: 7,
        sessionLength: 60,
      },
    ],
  }
  return data
}

export async function getPerformance(id) {
  const data = {
    userId: 19,
    kind: {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity',
    },
    data: [
      {
        value: 80,
        kind: 1,
      },
      {
        value: 120,
        kind: 2,
      },
      {
        value: 140,
        kind: 3,
      },
      {
        value: 180,
        kind: 4,
      },
      {
        value: 200,
        kind: 5,
      },
      {
        value: 190,
        kind: 6,
      },
    ],
  }
  return data
}
