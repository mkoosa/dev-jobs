import { test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import FormElements from '@/components/Shared/FormElements.vue';
import { RouterLinkStub } from '@vue/test-utils';

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
