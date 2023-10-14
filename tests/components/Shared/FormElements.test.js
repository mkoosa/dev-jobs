import { test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import FormElements from '@/components/Shared/FormElements.vue';
import { RouterLinkStub } from '@vue/test-utils';
import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';


describe('FormElements', () => {
  const createProps = (props = {}) => ({
    ...props
  });

  const renderFormElements = (props) => {
    expect(FormElements).toBeTruthy();
    const element = mount(FormElements, {
      props,
      global: {
        stubs: {
          FontAwesomeIcon: true,
          RouterLink: RouterLinkStub
        }
      }
    });
    return element;
  };

  test('if element is equal text', async () => {
    const props = createProps({
      element: 'text',
      classElement: ['form__element', 'desktop-view']
    });
    const element = renderFormElements(props);
    expect(element.props('element')).toBe('text');
  });

  test('if element is equal checkbox', async () => {
    const props = createProps({
      text: 'Full Time',
      classElement: ['form__element', 'form__element--job-type', 'flying-element'],
      element: 'checkbox'
    });
    const element = renderFormElements(props);
    expect(element.text()).toContain('Full Time');
  });
});

describe('TextInput', () => {
  it.only('communicates that user has checked full time', async () => {
    const { emitted } = render(FormElements, {
      props: {
        text: 'Full Time',
        classElement: ['form__element', 'form__element--job-type', 'flying-element'],
        element: 'checkbox'
      },
      global: {
        stubs: {
          FontAwesomeIcon: true,
        }
      }
    });
    const input = screen.getByRole('checkbox');
    await userEvent.click(input);
    const checkInput = emitted()['some-event'];
    expect(checkInput).toEqual([[]]);
  });
});