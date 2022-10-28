export async function formaDataActivity(data) {

  const sessions = data.sessions
  const sessionFormated = []  

  sessions.map((session, index) => {
    const item = {
      kilogram:session.kilogram,
      calories:session.calories
    }
    sessionFormated.push(item)
  })
  // console.log(sessionFormated)
  
  return sessionFormated
}