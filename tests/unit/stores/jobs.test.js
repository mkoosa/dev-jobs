import { createPinia, setActivePinia } from 'pinia';
import useJobsStore from '../../../src/stores/jobs';
import { beforeEach, describe, expect } from 'vitest';
import axios from 'axios';
vi.mock('axios');

describe('state', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it('stores jobs use can apply for', () => {
    const store = useJobsStore();
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
      const store = useJobsStore();
      await store.FETCH_JOBS();
      expect(store.jobs).toEqual(['Job1', 'Job2']);
    });
  });

  describe('getter', () => {
    beforeEach(() => {
      setActivePinia(createPinia());
    });
    it('returns jobs', () => {
      const store = useJobsStore();
      store.jobs.record = ['Job1', 'Job2'];
      const result = store.ALL_JOBS;
      expect(result).toEqual(['Job1', 'Job2']);
    });
  });
});
