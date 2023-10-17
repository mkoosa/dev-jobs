import { describe, expect, test } from 'vitest';
import Storage from '@/api/storage';

describe('storage', () => {
  const sessionStorage = new Storage('value', true);
  describe('setStorage and getStorage', () => {
    test('gets values from sesionStorage', () => {
      const values = {
        key: 'key',
        value: true
      };
      sessionStorage.setStorage(values.key, JSON.stringify(values));
      expect(JSON.parse(sessionStorage.getStorage())).toBe(true);
    });
    test('removeStorage', () => {
      const values = {
        key: 'key',
        value: true
      };
      sessionStorage.setStorage(values.key, JSON.stringify(values));
      sessionStorage.removeStorage(values.key);
      expect(sessionStorage.getStorage()).toBe(null);
    });
  });
});
