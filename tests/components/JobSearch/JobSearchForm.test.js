import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import JobSearchForm from '@/components/JobSearch/JobSearchForm.vue';
import { describe, expect } from 'vitest';

describe('JobSearchForm', () => {
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

  it('change isActiveClass value from false to true ', async () => {
    renderJobSearchForm();
    const switcher = screen.getByRole('switch');
    await userEvent.click(switcher);
    const toggle = vi.fn();
    toggle(false != true);
    expect(toggle).toHaveBeenCalledWith(true);
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
    const toggle = vi.fn();
    toggle(false != true);
    expect(toggle).toHaveBeenCalledWith(true);
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
    jobSearch('pl');
    expect(jobSearch).toHaveBeenCalledWith('pl');
  });
  describe('captions in the button depending on screen sizes', () => {
    it('displays content when user uses desktop', async () => {
      renderJobSearchForm();
      const changeButtonContent = vi.fn();
      changeButtonContent(true);
      expect(changeButtonContent).toHaveBeenCalledWith(true);
      const label = await screen.findByRole('label', {
        name: /Full Time/i
      });
      expect(label).toBeInTheDocument();
    });
    it('displays content when user uses mobile devise and clicks on filter icon', async () => {
      renderJobSearchForm();
      const switcher = screen.getByRole('switch');
      await userEvent.click(switcher);
      const changeButtonContent = vi.fn();
      changeButtonContent(true);
      expect(changeButtonContent).toHaveBeenCalledWith(true);
      const label = await screen.findByRole('label', {
        name: /Full Time Only/i
      });
      expect(label).toBeInTheDocument();
    });
  });
});
