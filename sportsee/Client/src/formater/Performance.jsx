export async function formaDataPerformance(data) {

  const sessions = data.sessions
  const day = ['1','2','3','4','5','6','7']
  const sessionFormated = []  
  
  sessions.map((session, index) => {
    const item = {
      day:day[day.session -1],
      kilogram:session.kilogram,
      calories:session.calories
    }
    sessionFormated.push(item)
  })
  console.log(performance.kind)
  
  return sessionFormated
}