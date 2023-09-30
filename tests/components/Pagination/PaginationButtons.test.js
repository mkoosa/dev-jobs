/*eslint-disable*/

import { describe, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/vue';
import PaginationButtons from '@/components/Pagination/PaginationButtons.vue';
import { RouterLinkStub } from '@vue/test-utils';
import { paginationStore } from '@/main';

describe('PaginationButtons', () => {
  describe('action button', () => {
    it("check if PaginationButtons are displayed", () => {
      render(PaginationButtons, {
        props: {
          currentPage: 1
        },
        global: {
          stubs: {
            FontAwesomeIcon: true,
            RouterLink: RouterLinkStub
          }
        },
      });

      const paginationButtons = screen.getByRole("pagination-buttons");
      
      expect(paginationButtons).toBeInTheDocument();
      
    });
  });
});
