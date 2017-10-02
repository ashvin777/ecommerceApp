class ProductAddPageCtrl {
  constructor(productsApi, $stateParams, $state, categoriesApi, subCategoriesApi) {
    'ngInject';
    this.item = $stateParams.item || {};
    this._state = $state;
    this._productsApi = productsApi;
    this._categoriesApi = categoriesApi;
    this._subCategoriesApi = subCategoriesApi;

    this.categories = [];
    this.subcategories = [];

    this.init();
  }

  init() {
    this.getCategories();
    this.getSubCategories();
  }

  getCategories() {
    this._categoriesApi.getAll()
      .then((res) => {
        this.categories = res.data;
        this._scope.$digest();
      }, (err) => {
        alert(err)
      });
  }

  getSubCategories() {
    this._subCategoriesApi.getAll()
      .then((res) => {
        this.subcategories = res.data;
        this._scope.$digest();
      }, (err) => {
        alert(err)
      });
  }

  add(isValid, item) {
    let apiMethod = this._productsApi.add;
    if (item.id) {
      apiMethod = this._productsApi.update;
    }
    apiMethod.call(this._productsApi, item)
      .then(() => {
        this._state.go('main.home.products');
      }, () => {

      });
  }
}
export default ProductAddPageCtrl;