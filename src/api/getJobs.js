import axios from 'axios';

const URL = 'https://api.jsonbin.io/v3/b/650478778d92e126ae6d161';
// const URL = 'https://json.extendsclass.com/bin/edca44a67ace';

const getJobs = async () => {
  try {
    const result = await axios.get(URL);
    console.log(result.data);
    return result.data;
    
  } 
  catch (error) {
    console.log(error);
  }
};

export default getJobs;
