import { View, StyleSheet } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import ShoppingStorage from '../../services/shopping-storage';
import ShoppingList from './ShoppingList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class ExploreShopping extends React.Component {
  state = {
    shopping: [],
  };

  async componentWillMount() {
    const shopping = await ShoppingStorage.getShopping();
    this.setState({ shopping });
  }


  render() {
    const { shopping } = this.state;
    return (
      <View style={styles.container}>
        <ShoppingList shopping={shopping}/>
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
