import { render, screen } from '@testing-library/vue';
import ActionBtn from '@/components/Shared/ActionBtn.vue';
import { describe, expect } from 'vitest';

describe('ActiobBtnn', () => {
  it('render text', () => {
    render(ActionBtn, {
      props: {
        text: 'Search',
        type: 'search-btn'
      }
    });

    const button = screen.getByRole('button', {
      name: /Search/i
    });
    expect(button).toBeTruthy();
  });
});
