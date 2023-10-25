import { createPinia, setActivePinia } from 'pinia';
import { userStore } from '@/main';
import { beforeEach, describe, expect } from 'vitest';

describe('state', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it('stores state if user has chosen full-time job', () => {
    const store = userStore;
    expect(store.fullTime).toBe(false);
  });
});

describe('getters', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it('returns status of FULL_TIME', () => {
    const store = userStore;
    store.fullTime = true;
    const result = store.FULL_TIME;
    expect(result).toBe(true);
  });
});
