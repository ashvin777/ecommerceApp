import BaseApi from './base-api';

class SubCategoriesApi extends BaseApi {
  constructor($http) {
    'ngInject';
    super();
    this._http = $http;
    this.ENDPOINT = "http://localhost:8080/api/v1/"
    this.BASE_URL = "subcategories";
  }
}

export default SubCategoriesApi;