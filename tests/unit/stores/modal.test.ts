import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect } from 'vitest';
import { jobStore, modalStore } from '@/main';

describe('state', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it('stores value if modal is true or false', () => {
    const store = modalStore;
    expect(store.modal).toBe(false);
  });
});

describe('actions', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it('sets modal value to display modal or not', () => {
    const store = modalStore;
    jobStore.jobs = new Array(30).fill({});
    store.activateModal();
    expect(store.modal).toBe(false);
  });
});

describe('getters', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it('returns ACTIVE_MODAL value', () => {
    const store = modalStore;
    expect(store.ACTIVE_MODAL).toBe(false);
  });
});
