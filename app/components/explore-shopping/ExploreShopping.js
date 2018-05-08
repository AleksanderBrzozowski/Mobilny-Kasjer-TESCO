import { View } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import ShoppingStorage from '../../services/shopping-storage';
import ShoppingList from './ShoppingList';
import globalStyles from '../../styles';

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
    const { navigation } = this.props;
    return (
      <View style={globalStyles.container}>
        <ShoppingList
          shopping={shopping}
          onItemPress={item => navigation.navigate('ShoppingProducts', { products: item.products })}
        />
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
