import { describe, expect } from 'vitest';
import { render, screen } from '@testing-library/vue';
import PaginationButtons from '@/components/Pagination/PaginationButtons.vue';
import { RouterLinkStub } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';

describe('PaginationButtons', () => {
  const pinia = createTestingPinia();
  render(PaginationButtons, {
    props: { currentPage: 1 },
    global: {
      plugins: [pinia],
      mocks: {
        route: {
          query: { page: 1 }
        }
      },
      stubs: {
        RouterLink: RouterLinkStub,
        FontAwesomeIcon: true
      }
    }
  });
  it('checks if PaginationButtons are displayed', () => {
    const paginationButtons = screen.getByRole('pagination-buttons');
    expect(paginationButtons).toBeInTheDocument();
  });
});
