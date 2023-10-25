import TextInput from '@/components/Shared/TextInput.vue';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/vue';

describe('TextInput', () => {
  it('communicates that user has entered characters', async () => {
    const { emitted } = render(TextInput, {
      props: {
        modelValue: '',
        placeholder: 'placeholder'
      },
      global: {
        stubs: {
          FontAwesomeIcon: true
        }
      }
    });
    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'Pl');
    const textInput = emitted()['update:modelValue'];
    expect(textInput).toEqual([['P'], ['Pl']]);
  });
});
