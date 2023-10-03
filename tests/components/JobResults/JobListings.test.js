import { render, screen} from '@testing-library/vue';
import JobListings from '@/components/JobResults/JobListings.vue';
import { RouterLinkStub } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import { jobStore } from '@/main';
import { describe, expect } from 'vitest';

describe('Joblistings', () => {
  it('displays 9 job results', async () => {
    const pinia = createTestingPinia();
    render(JobListings, {
      global: {
        plugins: [pinia],
        stubs: {
          FontAwesomeIcon: true,
          RouterLink: RouterLinkStub
        }
      }
    });

    jobStore.jobs.value = Array(15).fill({});
    const jobListings = await screen.findAllByRole('link');
    expect(jobListings).toHaveLength(9);
  });
});
