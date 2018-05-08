import { View } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import globalStyles from '../../styles';
import ProductsList from '../products/ProductsList';

const ShoppingProducts = ({ navigation }) => (
  <View style={globalStyles.container}>
    <ProductsList products={navigation.state.params.products}/>
  </View>
);

ShoppingProducts.navigationOptions = {
  title: 'Zakupy',
};

ShoppingProducts.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default ShoppingProducts;
