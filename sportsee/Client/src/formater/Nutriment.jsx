export async function extractNutriment(data) {
  if (!data) {
    return false
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
