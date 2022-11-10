import axios  from 'axios'

const urlId = window.location.pathname 

export async function getActivity(id)  {
  try {
    const {data:{data} } = await axios.get(`http://localhost:3000${urlId}/Activity`);
    // console.log(data)   
    return data; 
  } catch (error) {
    console.error(error);
  }  
} 




