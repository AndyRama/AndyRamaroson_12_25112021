export async function formaDataNutriment(data) {

  const keyDatas = data.keyDatas
  // const day = ['1','2','3','4','5','6','7']
  const sessionFormated = []  
  
  keyDatas.map((keyData, index) => {
    const item = {
      calorieCount: (keyData.calorieCount),
      proteinCount: (keyData.proteinCount),
      carbohydrateCount: (keyData.carbohydrateCount),
      lipidCount: (keyData.lipidCount)
    }
    sessionFormated.push(item)
  })
  
  return sessionFormated
}