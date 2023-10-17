import { expect, describe } from 'vitest';
import getJobs from '../../src/api/getJobs';
import axios from 'axios';
vi.mock('axios');

describe('getJobs', () => {
  it('fetches jobs from data base', async () => {
    axios.get.mockResolvedValue({ data: ['Job1', 'Job2'] });
    const result = await getJobs();
    expect(result).toEqual(['Job1', 'Job2']);
  });
  it('fetches jobs from data base if something has gone wrong', async () => {
    try {
      axios.get.mockResolvedValue({ data: ['Job1', 'Job2'] });
      expect(axios.get).toHaveBeenCalledWith('https://api.npoint.io/80f8108301d81e46aeac');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      axios.get.mockResolvedValue({ data: ['Job1', 'Job2'] });
      expect(axios.get).toHaveBeenCalledWith('https://json.extendsclass.com/bin/c4b5a6b0bdbf');
    }
    
  })
});
