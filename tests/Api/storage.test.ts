import { describe, expect, test } from 'vitest';

import Storage from '@/api/storage';

describe('storage', () => {
  const sessionStorage = new Storage('value', 'true');
  describe('setStorage and getStorage', () => {
    test('gets values from sesionStorage', () => {
      sessionStorage.setStorage();
      expect(sessionStorage.getStorage()).toBe('true');
    });
    test('removeStorage', () => {
      sessionStorage.setStorage();
      sessionStorage.removeStorage();
      expect(sessionStorage.getStorage()).toBe(null);
    });
  });
});
