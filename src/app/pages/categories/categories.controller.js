import EVENTS from '../../index.consts';

class CategoriesPageCtrl {
  constructor($scope, $rootScope, $state, categoriesApi, exportExcel) {
    'ngInject';
    this._categoriesApi = categoriesApi;
    this._exportExcel = exportExcel;
    this._state = $state;
    this._scope = $scope;
    this._rs = $rootScope;
    this.list = [];

    this.init();
  }

  init() {
    this._scope.$on(EVENTS.CATEGORY_RELOAD, this.getAll.bind(this));
    this.getAll();
  }

  getAll() {
    this._categoriesApi.getAll()
      .then((res) => {
        this.list = res.data;
        this._scope.$digest();
      }, (err) => {
        alert(err);
      });
  }

  add() {
    this._state.go('main.home.category-add');
  }

  delete(id) {
    this._categoriesApi.delete(id)
      .then(() => {
        this._rs.$broadcast(EVENTS.CATEGORY_RELOAD);
      }, (err) => {
        alert(err);
      });
  }

  update(item) {
    this._state.go('main.home.category-add', {
      item: item
    });
  }

  export(tableId) {
    let href = this._exportExcel.export(tableId, 'Categories');

    var link = document.createElement("a");
    link.download = "export.xlsx";
    link.href = href;
    link.click();
  }
}
export default CategoriesPageCtrl;