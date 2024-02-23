import React from 'react';

import { Hello } from '../../components/Hello/Hello';
import { render, screen } from '../../test-utils';

describe('Hello component', () => {
  test('Should render text', () => {
    const SAMPLE_TEXT = 'abcd';

    render(<Hello text={SAMPLE_TEXT} />);
    const element = screen.getByText(SAMPLE_TEXT);
    expect(element).toBeInTheDocument();
  });
});
