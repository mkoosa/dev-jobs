import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect } from 'vitest';
import { jobStore } from '@/main';
import {paginationStore} from '@/main' ;

describe('getter', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('gets TOTAL_PAGES ', () => {
    jobStore.jobs.record = Array(36).fill({});
    const result = paginationStore.TOTAL_PAGES;
    jobStore.jobs.record = Array(36).fill({});
    expect(result).toBe(4);
  });
  it('gets current page', () => {
    const result = paginationStore.CURRENT_PAGE;
    expect(result).toBe(1);
  }),
  it('gets previous page', () => {
    const result = paginationStore.PREVIOUS_PAGE;
    expect(result).toBe(0);
  })
  it('gets next page', () => {
    const result = paginationStore.NEXT_PAGE;
    expect(result).toBe(2);
  })
  

});