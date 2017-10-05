class CategoryAddPageCtrl {
  constructor($state, $stateParams, categoriesApi) {
    'ngInject';
    this._state = $state;
    this.item = $stateParams.item || {};
    this._categoriesApi = categoriesApi;
  }

  add(isValid, item) {
    let apiMethod = this._categoriesApi.add;
    console.log(item);
    if (item.id) {
      apiMethod = this._categoriesApi.update;
    }
    apiMethod.call(this._categoriesApi, item)
      .then(() => {
        this._state.go('main.home.categories');
      }, () => {

      });
  }
}
export default CategoryAddPageCtrl;