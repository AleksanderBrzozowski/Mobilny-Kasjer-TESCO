import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import ProductsList from './ProductsList';
import EditAddProduct from './EditAddProduct';
import TescoService from '../../services/tesco-service';
import ProductNotFound from './ProductNotFound';
import Button from '../Button';
import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productList: {
    flex: 1,
  },
});

class Shopping extends React.Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  static navigationOptions = {
    title: 'Zakupy',
  };

  state = {
    products: [],
    productNotFound: false,
    productToAdd: null,
    productToEdit: null,
  };

  onBarCodeRead = (barCode) => {
    TescoService.findProductByEan(barCode)
      .then((productToAdd) => {
        const { products } = this.state;
        const productToEdit = products.find(product => product.name === productToAdd.name);
        if (productToEdit) {
          this.setState({ productToEdit });
        } else {
          this.setState({ productToAdd });
        }
      })
      .catch(() => this.setState({ productNotFound: true }));
  };

  confirmProduct = (amount) => {
    const { products, productToAdd } = this.state;
    this.setState({ products: [...products, { ...productToAdd, amount }], productToAdd: null });
  };

  removeProduct = (productToRemove) => {
    const { products } = this.state;
    this.setState({ products: products.filter(product => product !== productToRemove) });
  };

  editProduct = (amount) => {
    const { products, productToEdit } = this.state;
    const editedProductIndex = products.indexOf(productToEdit);
    const productsCopy = [...products];
    productsCopy[editedProductIndex] = { ...productToEdit, amount };
    this.setState({ products: productsCopy, productToEdit: null });
  };

  totalPrice() {
    const { products } = this.state;
    return products.reduce(
      (prev, current) => prev + (current.price * current.amount),
      0,
    );
  }

  render() {
    const { navigation } = this.props;
    const {
      products, productToAdd, productNotFound, productToEdit,
    } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.productList}>
          <ProductsList
            products={products}
            onRemove={this.removeProduct}
            onEdit={product => this.setState({ productToEdit: product })}
          />
        </View>
        <Text medium bold center>Suma: {this.totalPrice().toFixed(2)} GBP</Text>
        <Button title="Dodaj produkt" onPress={() => navigation.navigate('ScanProduct', { onBarCodeRead: this.onBarCodeRead })} />
        {productToAdd &&
          <EditAddProduct onOk={this.confirmProduct}
                          onCancel={() => this.setState({ productToAdd: null })}
                          product={productToAdd}
                          type="add"
          />
        }
        {productToEdit &&
          <EditAddProduct onOk={this.editProduct}
                          onCancel={() => this.setState({ productToEdit: null })}
                          product={productToEdit}
                          type="edit"
          />
        }
        {productNotFound &&
          <ProductNotFound onClose={(() => this.setState({ productNotFound: false }))}/>
        }
      </View>
    );
  }
}

export default Shopping;
