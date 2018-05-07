import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Button as RNEButton } from 'react-native-elements';
import colors from '../colors';


const Button = ({ color, ...props }) => (
  <View style={{ margin: 5 }}>
    <RNEButton
      {...props}
      backgroundColor={colors[color]}
      raised
    />
  </View>
);

Button.propTypes = {
  color: PropTypes.string,
};

Button.defaultProps = {
  color: 'primary',
};

export default Button;
