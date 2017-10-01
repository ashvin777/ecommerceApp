import BaseApi from './base-api';

class ProductsApi extends BaseApi {
  constructor($http) {
    'ngInject';
    super();
    this._http = $http;
    this.ENDPOINT = "http://localhost:8080/api/v1/"
    this.BASE_URL = "products";
  }
}

export default ProductsApi;