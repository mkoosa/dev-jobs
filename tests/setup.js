import { cleanup } from '@testing-library/vue';
import { afterEach } from 'vitest';
import '@testing-library/jest-dom'
//cleaning old test before starting the new one
afterEach(() => cleanup());
