
import { render, screen } from '@testing-library/vue';
import HeaderHeading from '@/components/Header/HeaderHeading.vue';
import { ref } from 'vue';

describe('HeaderHeading', () => {
  it('displays application name', () => {
    render(HeaderHeading);
    const tittle = ref('devjobs');
    screen.getByRole('heading', { name: tittle.value });
  });
});
