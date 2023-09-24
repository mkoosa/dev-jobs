import axios from 'axios';
const URL = 'https://api.jsonbin.io/v3/b/650478778d92e126ae6d1617';

const getJobs = async () => {
  try {
    const result = await axios.get(URL);
    console.log(result.data);
    return result.data;  
  } 
  catch (error) {
    console.log("Error message:",error);
  }
};

export default getJobs;
