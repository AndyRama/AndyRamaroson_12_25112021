export async function formaDataAverage(data) {
  const sessions = data.sessions
  const day = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
  const sessionFormated = []

  if (!data.sessions) {
    // console.log(data.activity.sessions)
    return false
  } else {
    // eslint-disable-next-line array-callback-return
    sessions.map((session, index) => {
      const item = {
        day: day[session.day - 1],
        sessionLength: session.sessionLength,
      }
      sessionFormated.push(item)
    })

    return sessionFormated
  }
}
