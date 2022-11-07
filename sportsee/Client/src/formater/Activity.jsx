export async function formaDataActivity(data) {
  if(!data.sessions) {
    return false
  }

  const sessions = data.sessions
  const day = ['1','2','3','4','5','6','7']
  const sessionFormated = []  
  
  sessions.map((session, index) => {
    const item = {
      day:day[index -1],
      kilogram:session.kilogram,
      calories:session.calories
    }
    // console.log(day[index])
    sessionFormated.push(item)
  })
  // console.log(sessionFormated)
  
  return sessionFormated
}