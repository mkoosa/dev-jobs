import axios from 'axios';
const URL = 'https://api.npoint.io/745a8514c0046f140ff7';

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
