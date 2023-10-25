import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect } from 'vitest';

import useColorSchemaStore from '@/stores/colorSchema';

describe('state', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it('stores value if dark-theme is true or false', () => {
    const colorSchemaStore = useColorSchemaStore();
    expect(colorSchemaStore.darkSchema).toBe(false);
  });

  describe('actions', () => {
    beforeEach(() => {
      setActivePinia(createPinia());
    });
    it('finds body tag and adds or removes class dark-theme from it', () => {
      const body = document.querySelector('body');
      const colorSchemaStore = useColorSchemaStore();
      colorSchemaStore.CHANGE_COLOR_SCHEMA();
      if (body !== null) {
        body.classList.add('dark-theme');
        expect(body.className).toBe('dark-theme');
      }
    });
  });

  describe('getter', () => {
    beforeEach(() => {
      setActivePinia(createPinia());
    });
    it('returns value true or false', () => {
      const colorSchemaStore = useColorSchemaStore();
      const result = colorSchemaStore.DARK_SCHEMA_COLOR;
      expect(result).toBe(false);
    });
  });
});
