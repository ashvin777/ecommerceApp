import EVENTS from '../../index.consts';

class ProductsPageCtrl {
  constructor($scope, $rootScope, $state, productsApi) {
    'ngInject';
    this._productsApi = productsApi;
    this._scope = $scope;
    this._state = $state;
    this._rs = $rootScope;
    this.list = [];

    this.init();
  }

  init() {
    this._scope.$on(EVENTS.PRODUCT_RELOAD, this.getProducts.bind(this));
    this.getProducts();
  }

  getProducts() {
    this._productsApi.getAll()
      .then((res) => {
        this.list = res.data;
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

  update(item) {
    this._state.go('main.home.product-add', {
      item: item
    });
  }
}
export default ProductsPageCtrl;