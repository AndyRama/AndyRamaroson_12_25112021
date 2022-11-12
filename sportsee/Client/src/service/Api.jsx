// eslint-disable-next-line
import axios  from 'axios'

const urlId = window.location.pathname 

/**
 * 
 * @param {string} urlId  => (/user/id)
 * @param {string} method 
 * @returns {object} data
 */

export async function getUser(id) {  
  try {
    const {data:{data} } = await axios.get(`http://localhost:3000${urlId}`);
    // console.log(urlId);
    return data;    
  } catch (error) {
    console.error(error);
  }  
} 

export async function getActivity(id)  {
  try {
    const {data:{data} } = await axios.get(`http://localhost:3000${urlId}/Activity`);
    // console.log(data)   
    return data; 
  } catch (error) {
    console.error(error);
  }  
} 

export async function getAverage(id)  {
  try {
    const {data:{data} } = await axios.get(`http://localhost:3000${urlId}/Average-sessions`);
    // console.log(data)   
    return data; 
  } catch (error) {
    console.error(error);
  }  
} 

export async function getPerformance(id)  {
  try {
    const {data:{data} } = await axios.get(`http://localhost:3000${urlId}/performance`);
    // console.log(data)   
    return data; 
  } catch (error) {
    console.error(error);
  }  
} 

export async function getScore(id)  {
  try {
    // console.log("test")   
    const {data:{data} } = await axios.get(`http://localhost:3000${urlId}`);
    return data; 

  } catch (error) {
    console.error(error);
  }  
}




