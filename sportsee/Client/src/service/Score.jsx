// import axios  from 'axios'
// // const urlID = window.location.pathname 

// export async function getScore(id,keyData)  {
//   try {
//     const {data:{data} } = await axios.get(`http://localhost:3000/user/${id}`);
//     console.log(data)   
//     return data; 

//   } catch (error) {
//     console.error(error);
//   }  
// } 

// export async function getNutrition(id)  {
//   try {
//     const {data:{data} } = await axios.get(`http://localhost:3000/user/${id}`);
//     // console.log(data)   
//     return data; 

//   } catch (error) {
//     console.error(error);
//   }  
// } 

// Must return  formate {
//   calories: setCalories(result.data.data.keyData.calorieCount),
//   protein: setProtein(result.data.data.keyData.proteinCount),
//   clucide: setClucide(result.data.data.keyData.carbohydrateCount),
//   lipide: setLipide(result.data.data.keyData.lipidCount)
// }
