export async function extractScore(data, user) {
  const score = data.todayScore || data.score

  // eslint-disable-next-line no-unused-vars
  const userScore = [{ value: score }, { value: 1 - score }]

  return score * 100
}
