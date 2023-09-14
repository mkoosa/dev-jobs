import axios from 'axios';

// const URL = 'https://api.npoint.io/745a8514c0046f140ff7';
const URL = 'https://json.extendsclass.com/bin/edca44a67ace';

const getJobs = async () => {
  const result = await axios.get(URL);
  return result.data;
};

export default getJobs;
