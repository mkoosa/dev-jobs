import { mount } from '@vue/test-utils';
import PaginationListing from '@/components/Pagination/PaginationListing.vue';
import { paginationStore } from '@/main';
test('PaginationListing', () => {
  const wrapper = mount(PaginationListing, {
    props: {
      currentPage: 1,
      totalPages: 3
    }
  });
  expect(wrapper.props().currentPage).toBe(1);
  expect(wrapper.props().totalPages).toBe(3);
  let previousPage = paginationStore.PREVIOUS_PAGE;
  previousPage = true;
  const setMargin = vi.fn();
  setMargin(previousPage);
  expect(setMargin).toHaveBeenCalledWith(true);

  expect(wrapper.classes()).toContain('margin-left');
});

test('if does component contain class margin-left', () => {
  const wrapper = mount(PaginationListing, {
    props: {
      currentPage: 1,
      totalPages: 3
    }
  });
  let previousPage = paginationStore.PREVIOUS_PAGE;
  previousPage = true;
  const setMargin = vi.fn();
  setMargin(previousPage);
  expect(setMargin).toHaveBeenCalledWith(true);
  expect(wrapper.classes()).toContain('margin-left');
});
