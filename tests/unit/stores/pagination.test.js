import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect } from 'vitest';
import { jobStore } from '@/main';
import usePaginationStore from '@/stores/pagination';

describe('getter', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('gets TOTAL_PAGES ', () => {
    const store = usePaginationStore();
    jobStore.jobs.record = Array(36).fill({});
    const result = store.TOTAL_PAGES;
    expect(result).toBe(4);
  });
});
