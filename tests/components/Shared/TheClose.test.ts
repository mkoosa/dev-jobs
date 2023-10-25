// import { render, screen } from '@testing-library/vue';
import TheClose from '@/components/Shared/TheClose.vue';
import { mount } from '@vue/test-utils';
import { expect } from 'vitest';

test('props', () => {
  const wrapper = mount(TheClose, {
    props: {
      action: Function,
      classIconElement: 'close_icon'
    },
    global: {
      stubs: {
        FontAwesomeIcon: true
      }
    }
  });

  expect(wrapper.props().classIconElement).toBe('close_icon');
  expect(wrapper.props().action).toBe(Function);
});
