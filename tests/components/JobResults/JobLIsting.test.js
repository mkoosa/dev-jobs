import JobListing from '@/components/JobResults/JobListing.vue';
import { render, screen } from '@testing-library/vue';
import { expect } from 'vitest';

describe('JobListing', () => {
  it('populate values from job offer', () => {
    render(JobListing, {
      props: {
        job: {
          position: 'vue developer',
          company: 'google',
          postedAt: '5h ago',
          contract: 'full time',
          location: 'Los Angeles'
        }
      }
    });
    expect(screen.getByText("vue developer")).toBeInTheDocument()
    expect(screen.getByText("google")).toBeInTheDocument()
    expect(screen.getByText("5h ago")).toBeInTheDocument()
    expect(screen.getByText("full time")).toBeInTheDocument()
    expect(screen.getByText("Los Angeles")).toBeInTheDocument()

  });
});
