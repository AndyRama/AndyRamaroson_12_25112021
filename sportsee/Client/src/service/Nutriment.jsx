import axios  from 'axios'

export async function getNutriment(id)  {
  try {
    const {data:{data} } = await axios.get(`http://localhost:3000/user/${id}`);
    console.log(data)   
    return data; 
  } catch (error) {
    console.error(error);
  }  
} 
