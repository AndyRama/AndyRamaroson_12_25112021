import axios  from 'axios'

const urlId = window.location.pathname 

export async function getScore(id)  {
  try {
    console.log("test")   
    const {data:{data} } = await axios.get(`http://localhost:3000${urlId}`);
    return data; 

  } catch (error) {
    console.error(error);
  }  
}
