import EVENTS from '../../index.consts';

class ProductsPageCtrl {
  constructor($scope, $rootScope, productsApi) {
    'ngInject';
    this._productsApi = productsApi;
    this._scope = $scope;
    this._rs = $rootScope;
    this.products = [];

    this.init();
  }

  init() {
    this._scope.$on(EVENTS.PRODUCT_RELOAD, this.getProducts.bind(this));
    this.getProducts();
  }

  getProducts() {
    this._productsApi.getAll()
      .then((res) => {
        this.products = res.data;
        this._scope.$digest();
      }, (err) => {
        alert(err);
      });
  }

  delete(id) {
    this._productsApi.delete(id)
      .then(() => {
        this._rs.$broadcast(EVENTS.PRODUCT_RELOAD);
      }, (err) => {
        alert(err);
      });
  }
}
export default ProductsPageCtrl;