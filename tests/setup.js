import { cleanup } from '@testing-library/vue';
import { afterEach } from 'vitest';

//cleaning old test before starting the new one
afterEach(() => cleanup());
