export async function getUser(id) {
  const data = {
    id: 12,
    userInfos: {
      firstName: 'Karl',
      lastName: 'Dovineau',
      age: 31,
    },
    todayScore: 0.12,
    keyData: {
      calorieCount: 1930,
      proteinCount: 155,
      carbohydrateCount: 290,
      lipidCount: 50,
    },
  }
  return data
}

export async function getActivity(id) {
  const data = {
    id: 12,
    userInfos: {
      firstName: 'Karl',
      lastName: 'Dovineau',
      age: 31,
    },
    activity: {
      sessions: [
        { day: '2020-07-01', kilogram: 70, calories: 240 },
        { day: '2020-07-02', kilogram: 69, calories: 220 },
        { day: '2020-07-03', kilogram: 70, calories: 280 },
        { day: '2020-07-04', kilogram: 70, calories: 500 },
        { day: '2020-07-05', kilogram: 69, calories: 160 },
        { day: '2020-07-06', kilogram: 69, calories: 162 },
        { day: '2020-07-07', kilogram: 69, calories: 390 },
      ],
    },
  }
  return data
}

export async function getAverage(id) {
  const data = {
    id: 12,
    userInfos: {
      firstName: 'Karl',
      lastName: 'Dovineau',
      age: 31,
    },
    average: {
      sessions: [
        { day: 1, sessionLength: 30 },
        { day: 2, sessionLength: 40 },
        { day: 3, sessionLength: 50 },
        { day: 4, sessionLength: 30 },
        { day: 5, sessionLength: 30 },
        { day: 6, sessionLength: 50 },
        { day: 7, sessionLength: 50 },
      ],
    },
  }
  return data
}

export async function getPerformance(id) {
  const data = {
    id: 12,
    userInfos: {
      firstName: 'Karl',
      lastName: 'Dovineau',
      age: 31,
    },
    performance: {
      data: [
        { value: 200, kind: 1 },
        { value: 240, kind: 2 },
        { value: 80, kind: 3 },
        { value: 80, kind: 4 },
        { value: 220, kind: 5 },
        { value: 110, kind: 6 },
      ],
      kind: {
        1: 'cardio',
        2: 'energy',
        3: 'endurance',
        4: 'strength',
        5: 'speed',
        6: 'intensity',
      },
    },
  }
  return data
}

export async function getScore(id) {
  const data = {
    id: 12,
    userInfos: {
      firstName: 'Karl',
      lastName: 'Dovineau',
      age: 31,
    },
    todayScore: 0.24,
    keyData: {
      calorieCount: 19930,
      proteinCount: 155,
      carbohydrateCount: 290,
      lipidCount: 50,
    },
  }
  return data
}
