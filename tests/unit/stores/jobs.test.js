import { createPinia, setActivePinia } from 'pinia';
import { jobStore, userStore } from '@/main';
import { beforeEach, describe, expect } from 'vitest';
import axios from 'axios';
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
      axios.get.mockResolvedValue({ data: ['Job1', 'Job2'] });
      const store = jobStore;
      await store.FETCH_JOBS();
      expect(store.jobs).toEqual(['Job1', 'Job2']);
    });
  });
});

describe('getters', () => {
  describe('FILTERED_JOBS_BY_RULES', () => {
    const prepareJobs = () => {
      const jobs = [
        { location: 'Japan', position: 'Engineer', contract: 'Full Time' },
        { location: 'Russia', position: 'Engineer', contract: 'Full Time' },
        { location: 'United States', position: 'Director', contract: 'Part Time' }
      ];
      const store = jobStore;
      return {jobs, store}
    };

    it('returns jobs offers when user has used location and position ', () => {
      const { jobs, store } = prepareJobs();
      store.jobs = jobs
      userStore.userOptions = ['Engineer', 'Japan'];
      const result = store.FILTERED_JOBS_BY_RULES;
      expect(result).toEqual([{ location: 'Japan', position: 'Engineer', contract: 'Full Time' }]);
    });
    it('returns jobs offers when user has used location', () => {
      const { jobs, store } = prepareJobs();
      store.jobs = jobs
      userStore.userOptions = ['', 'japan'];
      const result = store.FILTERED_JOBS_BY_RULES;
      expect(result).toEqual([{ location: 'Japan', position: 'Engineer', contract: 'Full Time' }]);
    });
    it('returns jobs offers when user has used position', () => {
      const { jobs, store } = prepareJobs();
      store.jobs = jobs
      userStore.userOptions = ['Engineer', ''];
      const result = store.FILTERED_JOBS_BY_RULES;
      expect(result).toEqual([
        { location: 'Japan', position: 'Engineer', contract: 'Full Time' },
        { location: 'Russia', position: 'Engineer', contract: 'Full Time' }
      ]);
    });
  });
  it('returns amount of job offers on page', () => {
        const store = jobStore;
        store.jobs = [
          { location: 'Japan', position: 'Engineer', contract: 'Full Time' },
          { location: 'Russia', position: 'Engineer', contract: 'Full Time' },
          { location: 'United States', position: 'Director', contract: 'Part Time' }
        ];
  
        const result = store.JOBS_ON_PAGE;
        expect(result).toEqual([
          { location: 'Japan', position: 'Engineer', contract: 'Full Time' },
          { location: 'Russia', position: 'Engineer', contract: 'Full Time' }
        ]);
      });
  
    it('returns total amount of pages with job offers', () => {
      const store = jobStore;
      store.jobs = [
        { location: 'Japan', position: 'Engineer', contract: 'Full Time' },
        { location: 'Russia', position: 'Engineer', contract: 'Full Time' },
        { location: 'United States', position: 'Director', contract: 'Part Time' }
      ];
      const result = store.TOTAL_JOB_PAGES;
      expect(result).toBe(1);
    });
});
