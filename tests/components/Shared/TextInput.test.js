import TextInput from '@/components/shared/TextInput.vue';
import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';

describe('TextInput', () => {
  it.only('communicates that user has entered characters',async () => {
    const { emitted } = render(TextInput, {
      props: {
        modelValue: '',
        placeholder: 'placeholder'
      }
    });
    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'Pl');
    const textInput = emitted()['update:modelValue'];
    expect(textInput).toEqual([['P'], ['Pl']])
  });
});
