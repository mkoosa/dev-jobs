

import SwitcherColorSchema from '@/components/Shared/SwitcherColorSchema.vue';
import { render, screen } from '@testing-library/vue';
import useColorSchemaStore from '@/stores/colorSchema';
import { createTestingPinia } from '@pinia/testing';
import userEvent from '@testing-library/user-event';

describe('SwitcherColorSchema', () => {
  describe('when the user click on switcher ', () => {
    it.only('switches between dark and light mode user can choose', async () => {
      const pinia = createTestingPinia();
      render(SwitcherColorSchema, {
        global: {
          stubs: {
            FontAwesomeIcon: true
          },
          plugins: [pinia]
        }
      });
      const colorSchemaStore = useColorSchemaStore()
      const switcher = screen.getByRole('button');
      await userEvent.click(switcher);
      colorSchemaStore.CHANGE_COLOR_SCHEMA();
      expect(colorSchemaStore.DARK_SCHEMA_COLOR).toBe(false);
    });
  });
});
