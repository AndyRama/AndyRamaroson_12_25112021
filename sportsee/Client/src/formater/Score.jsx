export async function extractScore(data) {

  const score = data.todayScore || data.score;
  const userScore = [{ value: score }, { value: 1 - score }];
  console.log(userScore );

  return score * 100
}
