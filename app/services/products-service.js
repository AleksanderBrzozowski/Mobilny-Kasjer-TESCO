export default class ProductsService {
  static productsTotalPrice(products) {
    const productsTotalPrice = products.reduce(
      (prev, current) => prev + (current.price * current.amount),
      0,
    );
    return productsTotalPrice.toFixed(2);
  }
}
