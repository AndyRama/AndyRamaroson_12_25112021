import axios  from 'axios'
// import UserName from "../components/User/UserName/UserName";

const urlId = window.location.pathname 

// import { getUser } from "../../service/User";

export async function getUser(id) {  
  try {
    const {data:{data} } = await axios.get(`http://localhost:3000${urlId}`);
    console.log(urlId);
    return data;    
  } catch (error) {
    console.error(error);
  }  
} 

