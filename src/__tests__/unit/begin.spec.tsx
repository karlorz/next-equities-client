import { render, screen } from '@testing-library/react';

import Home from '@/app/(begin_test)/test_begin/page';

describe('Homepage', () => {
  it('renders the Components', () => {
    render(<Home />);

    const heading = screen.getByText('Next.js starter template', {
      selector: 'h1',
    });

    expect(heading).toBeInTheDocument();
  });
});
