import React from 'react';
import { render } from '@testing-library/react';
import Header from '..';

describe('Header', () => {
  it('renders', () => {
      const { getByText } = render(<Header appName="Fort Collins, Cluster 4"
          userSession={userSession}
          appIcon={<Menu />);

    expect(getByText('Oh, hello...')).toBeInTheDocument();
  });
});
