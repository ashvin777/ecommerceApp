class SubCategoryAddPageCtrl {
  constructor($state, $scope, $stateParams, subCategoriesApi, categoriesApi) {
    'ngInject';
    this._state = $state;
    this._scope = $scope;
    this._subCategoriesApi = subCategoriesApi;
    this._categoriesApi = categoriesApi;

    this.categories = [];
    this.item = $stateParams.item || {};

    this.init();
  }

  init() {
    this.getCategories();
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

  add(isValid, item) {
    let apiMethod = this._subCategoriesApi.add;
    if (item.id) {
      apiMethod = this._subCategoriesApi.update;
    }
    apiMethod.call(this._subCategoriesApi, item)
      .then(() => {
        this._state.go('main.home.subcategories');
      }, () => {

      });
  }
}
export default SubCategoryAddPageCtrl;