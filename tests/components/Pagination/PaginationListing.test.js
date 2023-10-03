import PaginationListing from '@/components/Pagination/PaginationListing.vue';
import { describe, expect } from 'vitest';
import { render, screen } from '@testing-library/vue';

describe('PaginationListing', () => {
  render(PaginationListing, {
    props: { currentPage: 1, totalPages: 3 }
  });
  it('displays current page', () => {
    const result = screen.getByText('1');
    expect(result).toBeInTheDocument();
  });
});
