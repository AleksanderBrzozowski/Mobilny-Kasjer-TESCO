import React from 'react';
import PropTypes from 'prop-types';
import { Text as RNText } from 'react-native';
import colors from '../colors';


const Text = ({
  style, small, medium, large, center, children, color, bold, ...rest
}) => (
  <RNText
    style={[
      center && { textAlign: 'center' },
      color && { color: colors[color] },
      small && { fontSize: 14 },
      medium && { fontSize: 17 },
      large && { fontSize: 20 },
      bold && { fontWeight: 'bold' },
      style && style,
    ]}
    {...rest}
  >
    {children}
  </RNText>
);

Text.propTypes = {
  color: PropTypes.string,
  style: PropTypes.any,
  center: PropTypes.bool,
  children: PropTypes.any,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  bold: PropTypes.bool,
};

Text.defaultProps = {
  color: 'primary',
};

export default Text;
