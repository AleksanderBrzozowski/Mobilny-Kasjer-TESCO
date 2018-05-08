import Config from 'react-native-config';

const apiUrl = 'https://dev.tescolabs.com/';
const headers = { 'Ocp-Apim-Subscription-Key': Config.API_KEY };

const productSearchParams = productDescription =>
  `query=${encodeURIComponent(productDescription)}&offset=0&limit=1`;

export default class TescoService {
  static findProductByEan(ean13) {
    return fetch(`${apiUrl}/product/?gtin=${ean13}`, { headers })
      .then(response => response.json())
      .then((data) => {
        const productDescription = data.products[0].description;
        const searchParams = productSearchParams(productDescription);
        return fetch(`${apiUrl}/grocery/products/?${searchParams}`, { headers });
      })
      .then(response => response.json())
      .then((data) => {
        const { name, price, image } = data.uk.ghs.products.results[0];
        return { name, price, image };
      });
  }
}
