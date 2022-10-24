export async function formaDataActivity(data) {

  const sessions = data.sessions
  const day = ['1','2','3','4','5','6','7']
  const sessionFormated = []  
  sessions.map((session,index) => {
    const item = {
      day:day[session.day -1],
      kilogram:session.kilogram,
      calories:session.calories
    }
    sessionFormated.push(item)
  })
  console.log(sessionFormated)
  
  return sessionFormated
}