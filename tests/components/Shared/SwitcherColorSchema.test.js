import SwitcherColorSchema from '@/components/Shared/SwitcherColorSchema.vue';
import { render, screen } from '@testing-library/vue';
import useColorSchemaStore from '@/stores/ColorSchema';
import { createTestingPinia } from '@pinia/testing';
import userEvent from '@testing-library/user-event';

describe('SwitcherColorSchema', () => {
  describe('when the user click on switcher ', () => {
    it('switches between dark and light mode user can choose', async () => {
      const pinia = createTestingPinia();
      const store = useColorSchemaStore();
      render(SwitcherColorSchema, {
        global: {
          stubs: {
            FontAwesomeIcon: true
          },
        plugins: [pinia]
      }
    });
    
    const switcher = screen.getByRole('button');
    await userEvent.click(switcher);
    expect(store.CHANGE_COLOR_SCHEMA).toHaveBeenCalled();
    store.darkSchema = true;
    expect(store.DARK_SCHEMA_COLOR).toBe(true);
  });
});
})
