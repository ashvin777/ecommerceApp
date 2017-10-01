import EVENTS from '../../index.consts';

class SubCategoriesPageCtrl {
  constructor($scope, $rootScope, $state, subCategoriesApi, exportExcel) {
    'ngInject';
    this._subCategoriesApi = subCategoriesApi;
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
    this._subCategoriesApi.getAll()
      .then((res) => {
        this.list = res.data;
        this._scope.$digest();
      }, (err) => {
        alert(err);
      });
  }

  add() {
    this._state.go('main.home.subcategory-add');
  }

  delete(id) {
    this._subCategoriesApi.delete(id)
      .then(() => {
        this._rs.$broadcast(EVENTS.CATEGORY_RELOAD);
      }, (err) => {
        alert(err);
      });
  }

  update(item) {
    this._state.go('main.home.subcategory-add', {
      item: item
    });
  }

  export(tableId) {
    this._exportExcel.export(tableId, 'Sub Categories');
  }
}
export default SubCategoriesPageCtrl;