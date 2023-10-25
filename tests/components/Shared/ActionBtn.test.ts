import { render, screen } from '@testing-library/vue';
import ActionBtn from '@/components/Shared/ActionBtn.vue';
import { describe, expect } from 'vitest';

describe('ActiobBtn', () => {

  const renderActionBtn = () => {
    render(ActionBtn, {
      props: {
        text: 'Search',
        type: 'search-btn'
      },
      slots: {
        default: `<template>
              <h1>in slots</h1>
              </template>`
      }
    });
  }
  it('renders text', () => {
    renderActionBtn();
    const button = screen.getByRole('button', {
      name: /Search/i
    });
    expect(button).toBeTruthy();
  });

  it('renders slot content', async () => {
    renderActionBtn()
    const text = await screen.findByText('in slots')
    expect(text).toBeInTheDocument()
  });
});
