import axios  from 'axios'

const urlId = window.location.pathname 

export async function getAverage(id)  {
  try {
    const {data:{data} } = await axios.get(`http://localhost:3000${urlId}/Average-sessions`);
    // console.log(data)   
    return data; 
  } catch (error) {
    console.error(error);
  }  
} 
