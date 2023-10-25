import axios from 'axios';
import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect } from 'vitest';

import { jobStore, userStore } from '@/main';

import type { Mock } from 'vitest';
const useMockAxios = axios.get as Mock;

vi.mock('axios');

describe('state', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it('stores jobs use can apply for', () => {
    const store = jobStore;
    expect(store.jobs).toEqual([]);
  });
});

describe('actions', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  describe('FETCH_JOBS', () => {
    it('fetches jobs from Api', async () => {
      useMockAxios.mockResolvedValue({ data: ['Job1', 'Job2'] });
      const store = jobStore;
      await store.FETCH_JOBS();
      expect(store.jobs).toEqual(['Job1', 'Job2']);
    });
  });
});

describe('getters', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  describe('FILTERED_JOBS_BY_RULES', () => {
    const prepareJobs = (job = {}) => ({
      location: 'Lublin',
      position: 'string',
      contract: 'Full Time',
      ...job
    });

    // const jobs: Partial<Job> = { location: 'Japan', position: 'Engineer', contract: 'Full Time' };
    it('returns jobs offers when user has used location and position ', () => {
      jobStore.jobs = [
        prepareJobs({ location: 'Japan', position: 'Engineer', contract: 'Full Time' })
      ];
      userStore.userOptions = ['Engineer', 'Japan'];
      const result = jobStore.FILTERED_JOBS_BY_RULES;
      expect(result).toEqual([{ location: 'Japan', position: 'Engineer', contract: 'Full Time' }]);
    });
    it('returns jobs offers when user has used location', () => {
      jobStore.jobs = [
        prepareJobs({ location: 'Japan', position: 'Engineer', contract: 'Full Time' })
      ];

      userStore.userOptions = ['', 'japan'];
      const result = jobStore.FILTERED_JOBS_BY_RULES;
      expect(result).toEqual([{ location: 'Japan', position: 'Engineer', contract: 'Full Time' }]);
    });
    it('returns jobs offers when user has used position', () => {
      jobStore.jobs = [
        prepareJobs({ location: 'Japan', position: 'Engineer', contract: 'Full Time' })
      ];
      userStore.userOptions = ['Engineer', ''];
      const result = jobStore.FILTERED_JOBS_BY_RULES;
      expect(result).toEqual([{ location: 'Japan', position: 'Engineer', contract: 'Full Time' }]);
    });
    it('returns amount of job offers on page', () => {
      const store = jobStore;
      jobStore.jobs = [
        prepareJobs({ location: 'Japan', position: 'Engineer', contract: 'Full Time' })
      ];
      const result = store.JOBS_ON_PAGE;
      expect(result).toEqual([
        prepareJobs({ location: 'Japan', position: 'Engineer', contract: 'Full Time' })
      ]);
    });
    it('returns total amount of pages with job offers', () => {
      const store = jobStore;
      jobStore.jobs = [
        prepareJobs({ location: 'Japan', position: 'Engineer', contract: 'Full Time' })
      ];

      const result = jobStore.TOTAL_JOB_PAGES;
      expect(result).toBe(1);
    });
  });
});
