import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import JobSearchForm from '@/components/JobSearch/JobSearchForm.vue';
import { describe, expect, vi } from 'vitest';
import { useRouter } from 'vue-router';
vi.mock('vue-router');

describe('JobSearchForm', () => {
  const push = vi.fn();
  useRouter.mockReturnValue({ push });
  const renderJobSearchForm = () => {
    render(JobSearchForm, {
      global: {
        stubs: {
          FontAwesomeIcon: true
        }
      }
    });
  };

  it('renders JobSearchForm component', () => {
    renderJobSearchForm();
    const component = screen.getByRole('form');
    expect(component).toBeInTheDocument();
  });

  it('adds class to flyingsElements', async () => {
    renderJobSearchForm();
    const switcher = screen.getByRole('switch');
    await userEvent.click(switcher);
    const flElements = screen.getByTestId('fl-elements');
    expect(flElements).toHaveClass('active');
  });

  it('emits click event when user has clicked on the button', async () => {
    const { emitted } = render(JobSearchForm, {
      global: {
        stubs: {
          FontAwesomeIcon: true
        }
      }
    });
    const switcher = screen.getByRole('switch');
    await userEvent.click(switcher);
    const button = emitted()['itemClicked'];
    expect(button).toBeTruthy();
  });

  it('retrieves value that user has entered to inputs ', async () => {
    renderJobSearchForm();
    const searchBtn = screen.getByRole('button', {
      name: /search/i
    });
    await userEvent.click(searchBtn);
    const jobSearch = vi.fn();
    jobSearch('Lublin');
    expect(jobSearch).toHaveBeenCalledWith('Lublin');
    expect(push).toHaveBeenCalled({
      name: 'JobResults',
      query: { title: 'vue developer', location: 'Lublin' }
    });
  });

  describe('label content depending on screen sizes', () => {
    it('displays label content when user uses desktop', async () => {
      renderJobSearchForm();
      const label = await screen.findByRole('label', {
        name: /Full Time/i
      });
      expect(label).toBeInTheDocument();
    });

    it('displays label content when user uses mobile devise and clicks on filter icon', async () => {
      renderJobSearchForm();
      const switcher = screen.getByRole('switch');
      await userEvent.click(switcher);
      const label = await screen.findByRole('label', {
        name: /Full Time Only/i
      });
      expect(label).toBeInTheDocument();
    });
  });

  it('removes active class from flying elements when the user clicks on close icon', async () => {
    renderJobSearchForm();
    const switcher = screen.getByRole('switch');
    await userEvent.click(switcher);
    const closeIcon = screen.getByTestId('clos-Icon');
    await userEvent.click(closeIcon);
    expect(closeIcon).toBeInTheDocument();
    const flElements = screen.getByTestId('fl-elements');
    expect(flElements).not.toHaveClass('active');
  });
});
