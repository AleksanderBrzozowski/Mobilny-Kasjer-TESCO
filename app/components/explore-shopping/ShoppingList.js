import React from 'react';
import { FlatList, View } from 'react-native';
import PropTypes from 'prop-types';
import { List, ListItem } from 'react-native-elements';
import ProductsService from '../../services/products-service';

class ShoppingList extends React.Component {
  state = {
    productToRemove: null,
  };

  render() {
    const { shopping, onItemPress } = this.props;
    return (
      <View>
        <List>
          <FlatList
            data={shopping}
            renderItem={({ item }) => (
              <ListItem
                roundAvatar
                title={item.date}
                subtitle={`${ProductsService.productsTotalPrice(item.products)} GBP`}
                onPress={() => onItemPress(item)}
              />
            )}
            keyExtractor={(item, index) => `${index}`}
          />
        </List>
      </View>
    );
  }
}

ShoppingList.propTypes = {
  shopping: PropTypes.array.isRequired,
  onItemPress: PropTypes.func.isRequired,
};

export default ShoppingList;
