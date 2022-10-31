import axios  from 'axios'

export async function getScore(id)  {
  try {
    const {data:{data} } = await axios.get(`http://localhost:3000/user/${id}`);
    // console.log(data)   
    return data; 

  } catch (error) {
    console.error(error);
  }  
} 

//   calories: setCalories(data.data.keyData.calorieCount),
//   protein: setProtein(data.data.keyData.proteinCount),
//   clucide: setClucide(data.data.keyData.carbohydrateCount),
//   lipide: setLipide(data.data.keyData.lipidCount)

