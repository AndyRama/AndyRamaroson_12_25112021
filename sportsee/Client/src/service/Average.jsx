import axios  from 'axios'

export async function getAverage(id)  {
  try {
    const {data:{data} } = await axios.get(`http://localhost:3000/user/${id}/Average-sessions`);
    console.log(data)   
    return data; 
  } catch (error) {
    console.error(error);
  }  
} 
