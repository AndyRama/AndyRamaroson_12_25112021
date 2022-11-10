import axios  from 'axios'

const urlId = window.location.pathname 

export async function getPerformance(id)  {
  try {
    const {data:{data} } = await axios.get(`http://localhost:3000${urlId}/performance`);
    // console.log(data)   
    return data; 
  } catch (error) {
    console.error(error);
  }  
} 