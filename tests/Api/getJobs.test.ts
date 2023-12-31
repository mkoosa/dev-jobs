import axios from 'axios';
import { describe, expect } from 'vitest';

import getJobs from '../../src/api/getJobs';

import type { Mock } from 'vitest';
vi.mock('axios');
const axiosGetMock = axios.get as Mock;

describe('getJobs', () => {
  it('fetches jobs from data base', async () => {
    axiosGetMock.mockResolvedValue({ data: ['Job1', 'Job2'] });
    const result = await getJobs();
    expect(result).toEqual(['Job1', 'Job2']);
  });
  it('fetches jobs from data base if something has gone wrong', async () => {
    try {
      axiosGetMock.mockResolvedValue({ data: ['Job1', 'Job2'] });
      expect(axios.get).toHaveBeenCalledWith('https://api.npoint.io/953e27d99ed209ee372b');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      axiosGetMock.mockResolvedValue({ data: ['Job1', 'Job2'] });
      expect(axios.get).toHaveBeenCalledWith('https://json.extendsclass.com/bin/c4b5a6b0bdbf');
    }
  });
});
