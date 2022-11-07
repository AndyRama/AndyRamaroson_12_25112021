import axios  from 'axios'

export async function getUser(id) {
  try {
    const {data:{data} } = await axios.get(`http://localhost:3000/user/${id}`);
    // console.log({id})
    return data;    
  } catch (error) {
    console.error(error);
  }  
} 

export const requestNutrition = async (id, setCalories, setProtein, setClucide, setLipide) => {

  const result = await axios.get(`http://localhost:3000/user/${id}`);
  console.log(result.data.data.keyData.calorieCount);

  return  {
      calories: setCalories(result.data.data.keyData.calorieCount),
      protein: setProtein(result.data.data.keyData.proteinCount),
      clucide: setClucide(result.data.data.keyData.carbohydrateCount),
      lipide: setLipide(result.data.data.keyData.lipidCount)
  }
}

