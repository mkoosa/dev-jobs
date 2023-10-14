import { createPinia, setActivePinia } from 'pinia';
import { blurStore } from '@/main';
import { expect } from 'vitest';
describe('state', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it('stores value if blur is true or false', () => {
    const store = blurStore
    expect(store.BLUR).toBe(false)
  });
});
describe('actions', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it('sets blur', () => {
    blurStore.ACTIVATE_BLUR();
    expect(blurStore.BLUR).toBe(true);
  });
});
