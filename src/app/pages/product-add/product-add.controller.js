class ProductAddPageCtrl {
  constructor(productsApi) {
    'ngInject';
    this._productsApi = productsApi;
  }

  add(isValid, product) {
    this._productsApi.add(product);
  }
}
export default ProductAddPageCtrl;