import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Icon, List, ListItem } from 'react-native-elements';
import colors from '../../colors';
import RemoveProduct from '../shopping/RemoveProduct';

const styles = StyleSheet.create({
  rightIconsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 0.25,
  },
});

const ProductActions = ({ onRemove, onEdit }) => (
  <View style={styles.rightIconsWrapper}>
    <Icon
      name="edit"
      color={colors.primary}
      onPress={onEdit}
    />
    <Icon
      name="delete"
      color={colors.secondary}
      onPress={onRemove} />
  </View>
);

ProductActions.propTypes = {
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

class ProductsList extends React.Component {
  state = {
    productToRemove: null,
  };

  render() {
    const { products, onRemove, onEdit } = this.props;
    const { productToRemove } = this.state;
    const isEditable = onRemove && onEdit;
    return (
      <View>
        <List>
          <FlatList
            data={products}
            renderItem={({ item }) => (
              <ListItem
                roundAvatar
                title={item.name}
                subtitle={`${item.price} x ${item.amount} = ${(item.amount * item.price).toFixed(2)} GBP`}
                avatar={{ uri: item.image }}
                rightIcon={ isEditable ?
                  <ProductActions
                    onRemove={() => this.setState({ productToRemove: item })}
                    onEdit={() => onEdit(item)}
                  /> :
                  <View />
                }
              />
            )}
            keyExtractor={(item, index) => `${index}`}
          />
        </List>
        {productToRemove &&
          <RemoveProduct
            onClose={() => this.setState({ productToRemove: null })}
            onRemove={() => {
              this.setState({ productToRemove: null });
              onRemove(productToRemove);
            }}
          />
        }
      </View>
    );
  }
}

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
  onRemove: PropTypes.func,
  onEdit: PropTypes.func,
};

export default ProductsList;
