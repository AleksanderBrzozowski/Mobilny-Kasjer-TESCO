import { View, StyleSheet } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import ShoppingStorage from '../../services/shopping-storage';
import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  logo: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonGroup: {
    justifyContent: 'flex-end',
  },
});

class ExploreShopping extends React.Component {
  state = {
    allProducts: [],
  };

  async componentWillMount() {
    const allProducts = await ShoppingStorage.getShopping();
    this.setState({ allProducts });
  }


  render() {
    const { allProducts } = this.state;
    console.log(allProducts);
    return (
      <View style={styles.container}>
        <Text medium>Produktów: {allProducts.length}</Text>
      </View>
    );
  }
}

ExploreShopping.navigationOptions = {
  title: 'Przeglądaj zakupy',
};

ExploreShopping.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default ExploreShopping;
