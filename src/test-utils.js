import { render } from '@testing-library/react';
import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './assets/styles/GlobalStyle';
import { theme } from './assets/styles/Theme';

const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

AllTheProviders.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
