// eslint-disable-next-line
import axios from 'axios'

/*  IMPORTANT!!!
    We are changing the state of a component A from the file B, only by passing the setState of component A as argument and param
    to the file B function and than calling the function of a file B inside the useEffect of a component A
*/

/*
    HOW ARE API REQUEST WORKING
    1 - I am using async/await to handle the response time
    2 - I am changin the state of the A component using function arguments and parameters
    3 - In Componant A I'am using the method .load("change state inside") to change the state
*/

/**
 *
 * @param {string} urlId  => (/user/id)
 * @param {string} props.id
 * @param {object} data
 * @returns {object} data > send to formated
 */

// the user id grabed from the url and used to update the endpoints dynamically
const urlId = window.location.pathname

export async function getUser(id) {
  try {
    const {
      data: { data },
    } = await axios.get(`http://localhost:3000${urlId}`)
    // console.log(data);
    return data
  } catch (error) {
    console.error(error)
  }
}

export async function getActivity(id) {
  try {
    const {
      data: { data },
    } = await axios.get(`http://localhost:3000${urlId}/Activity`)
    // console.log(data)
    return data
  } catch (error) {
    console.error(error)
  }
}

export async function getAverage(id) {
  try {
    const {
      data: { data },
    } = await axios.get(`http://localhost:3000${urlId}/Average-sessions`)
    // console.log(data)
    return data
  } catch (error) {
    console.error(error)
  }
}

export async function getPerformance(id) {
  try {
    const {
      data: { data },
    } = await axios.get(`http://localhost:3000${urlId}/performance`)
    // console.log(data)
    return data
  } catch (error) {
    console.error(error)
  }
}

export async function getScore(id) {
  try {
    // console.log("test")
    const {
      data: { data },
    } = await axios.get(`http://localhost:3000${urlId}`)
    return data
  } catch (error) {
    console.error(error)
  }
}
