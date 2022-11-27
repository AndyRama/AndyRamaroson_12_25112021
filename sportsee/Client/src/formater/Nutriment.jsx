export async function extractNutriment(data) {
  if (!data) {
    return console.log('testets')
  }

  const {
    keyData: { calorieCount, proteinCount, carbohydrateCount, lipidCount },
  } = data

  return {
    calorieCount,
    proteinCount,
    carbohydrateCount,
    lipidCount,
  }
}
