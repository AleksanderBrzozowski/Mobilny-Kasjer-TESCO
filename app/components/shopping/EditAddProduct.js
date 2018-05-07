import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';
import { Image, StyleSheet, View } from 'react-native';
import Button from '../Button';
import colors from '../../colors';
import Text from '../Text';
import PopupDialog from '../PopupDialog';

const titlesByType = {
  add: 'Dodaj produkt',
  edit: 'Edytuj produkt',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productWrapper: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productAmountIconsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

class EditAddProduct extends React.Component {
  constructor(props) {
    super(props);
    const { product } = this.props;
    this.state = {
      amount: product.amount || 1,
    };
  }

  changeAmount = (value) => {
    const { amount } = this.state;
    const newAmount = amount + value;
    this.setState({ amount: newAmount > 0 ? newAmount : 1 });
  };

  render() {
    const {
      onOk, onCancel, product, type,
    } = this.props;
    const { amount } = this.state;
    return (
      <PopupDialog height={0.8} title={titlesByType[type]}>
        <View style={styles.container}>
          <View style={styles.productWrapper}>
            <Text bold center color="primary" large>{product.name}</Text>
            <Image
              source={{ uri: product.image }}
              style={{ width: 90, height: 90 }}
            />
            <Text center color="secondary" medium>{product.price} GBP</Text>
            <Text center color="primary" medium>x{amount} = {(amount * product.price).toFixed(2)} GBP</Text>
            <View style={styles.productAmountIconsWrapper}>
              <Icon
                name="add"
                color={colors.primary}
                raised
                onPress={() => this.changeAmount(1)}/>
              <Icon
                type="material-community"
                name="minus"
                color={colors.secondary}
                raised
                onPress={() => this.changeAmount(-1)} />
            </View>
          </View>
          <View>
            <Button title="Potwierdź" color="primary" onPress={() => onOk(amount)} />
            <Button title="Anuluj" color="secondary" onPress={onCancel} />
          </View>
        </View>
      </PopupDialog>
    );
  }
}

EditAddProduct.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    amount: PropTypes.number,
  }).isRequired,
  onOk: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default EditAddProduct;