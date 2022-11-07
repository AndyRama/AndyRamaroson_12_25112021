export async function formaDataAverage(data) {
  if(!data.sessions) {
    return false
  }

  const sessions = data.sessions
  const day = ['L','M','M','J','V','S','D']
  const sessionFormated = []  
  
  sessions.map((session,index) => {
    const item = {
      day:day[session.day -1],
      sessionLength:session.sessionLength
    }
    sessionFormated.push(item)
  })
  // console.log(sessionFormated)
  
  return sessionFormated
}