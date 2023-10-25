// console.log(Job);

import axios from 'axios';

import type { Job } from '@/api/types';

const URL = 'https://api.npoint.io/953e27d99ed209ee372b';

// in case URL is not available => fake backend can generate to many request
const SECOND_URL = 'https://json.extendsclass.com/bin/c4b5a6b0bdbf';

const getJobs = async () => {
  try {
    const result = await axios.get(URL);
    return result.data;
  } catch (error) {
    console.log('Error message:', error);
    const result = await axios.get<Job[]>(SECOND_URL);
    return result.data;
  }
};

export default getJobs;
