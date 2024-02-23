import PropTypes from 'prop-types';
import React from 'react';

import { StyledText } from './Hello.style';

export const Hello = ({ text }) => <StyledText>{text}</StyledText>;

Hello.propTypes = {
  text: PropTypes.string.isRequired,
};
