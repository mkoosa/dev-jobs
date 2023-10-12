import axios from 'axios';
const URL = 'https://api.npoint.io/b8cc8d83e11c57cba52f';

const getJobs = async () => {
  try {
    const result = await axios.get(URL); 
    return result.data;  
  } 
  catch (error) {
    console.log("Error message:",error);
  }
};

export default getJobs;
