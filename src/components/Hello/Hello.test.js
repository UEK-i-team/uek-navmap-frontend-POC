import React from 'react';

import { render, screen } from '../../test-utils';
import { Hello } from './Hello';

test('renders learn react link', () => {
  const SAMPLE_TEXT = 'abcd';

  render(<Hello text={SAMPLE_TEXT} />);
  const element = screen.getByText(SAMPLE_TEXT);
  expect(element).toBeInTheDocument();
});
