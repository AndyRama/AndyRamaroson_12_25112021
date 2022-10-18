import axios  from 'axios'

export async function getUser(id) {
  try {
    const {data:{data} } = await axios.get(`http://localhost:3000/user/${id}`);
    return data;
    
  } catch (error) {
    console.error(error);
  }

} 