import { AsyncStorage } from 'react-native';
import ProductsService from './products-service';

export default class ShoppingStorage {
  static async saveShopping(products) {
    const shopping = await ShoppingStorage.getShopping();
    const mergedShopping = [...shopping, {
      products,
      totalPrice: ProductsService.productsTotalPrice(products),
      date: new Date().toLocaleString(),
    }];
    return AsyncStorage.setItem('products', JSON.stringify(mergedShopping));
  }

  static async getShopping() {
    const allProductsJson = await AsyncStorage.getItem('products') || [];
    return JSON.parse(allProductsJson);
  }
}
