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
      expect(axios.get).toHaveBeenCalledWith('https://api.jsonbin.io/v3/b/650478778d92e126ae6d16');
      
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
    
  })
});
