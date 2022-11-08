export async function extractNutriment(data) {
  
  const {keyData:{calorieCount, proteinCount, carbohydrateCount,lipidCount}} = data
  
  return {
    calorieCount,
    proteinCount,
    carbohydrateCount,
    lipidCount
  }
}

