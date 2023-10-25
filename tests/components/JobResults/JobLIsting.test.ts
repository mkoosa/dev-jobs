import JobListing from '@/components/JobResults/JobListing.vue';
import { describe, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import { RouterLinkStub } from '@vue/test-utils';
import { render, screen } from '@testing-library/vue';

describe('JobListing', () => {
  const createProps = () => ({
    job: {
      position: 'vue developer',
      company: 'google',
      postedAt: '5h ago',
      contract: 'full time',
      location: 'Los Angeles',
      id: 1
    }
  });

  it('populate values from job offer', () => {
    const props = createProps()
    render(JobListing, {
      props,
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    });
    expect(screen.getByText('vue developer')).toBeInTheDocument();
    expect(screen.getByText('google')).toBeInTheDocument();
    expect(screen.getByText('5h ago')).toBeInTheDocument();
    expect(screen.getByText('full time')).toBeInTheDocument();
    expect(screen.getByText('Los Angeles')).toBeInTheDocument();
  });

  it('checks if pageLink is going to be properly prepared', () => {
    const props = createProps();
    const wrapper = shallowMount(JobListing, {
      global: {
        stubs: ['RouterLink']
      },
      props
    });
    expect(wrapper.html()).toContain(`/jobs/results/1`);
  });
});
