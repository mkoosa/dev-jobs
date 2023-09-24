import { createPinia, setActivePinia } from 'pinia';
import { jobStore } from '@/main';
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

  describe('getter', () => {
    beforeEach(() => {
      setActivePinia(createPinia());
    });
    it('returns jobs', () => {
      const store = jobStore;
      store.jobs.record = ['Job1', 'Job2'];
      const result = store.ALL_JOBS;
      expect(result).toEqual(['Job1', 'Job2']);
    });
  });
});
