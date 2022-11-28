export async function formaDataActivity(data) {
  const sessions = data.sessions
  const sessionFormated = []
  const day = ['1', '2', '3', '4', '5', '6', '7']

  if (!data.sessions) {
    return false
  }

  // eslint-disable-next-line array-callback-return
  sessions.map((session, index) => {
    const item = {
      day: day[index],
      kilogram: session.kilogram,
      calories: session.calories,
    }
    sessionFormated.push(item)
  })

  return sessionFormated
}
