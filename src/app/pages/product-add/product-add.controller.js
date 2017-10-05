class ProductAddPageCtrl {
  constructor(productsApi, $scope, $stateParams, $state, Upload, categoriesApi, subCategoriesApi, imagesApi) {
    'ngInject';
    this.item = $stateParams.item || {};
    this._state = $state;
    this._scope = $scope;
    this._upload = Upload;
    this._productsApi = productsApi;
    this._categoriesApi = categoriesApi;
    this._subCategoriesApi = subCategoriesApi;
    this._imagesApi = imagesApi;

    this.categories = [];
    this.subcategories = [];
    this.images = [];
    this.fileImagesUploads = [];
    this.init();
  }

  init() {
    this.getCategories();
    this.getSubCategories();
    this.getImages();
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

  getImages() {
    if (!this.item.id) {
      return;
    }
    this._imagesApi.getByField('product_id', this.item.id)
      .then((res) => {
        this.images = res.data;
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
      .then((res) => {
        this.upload(res.data[0].id, this.fileImagesUploads);
      })
      .then(() => {
        this._state.go('main.home.products');
      }, () => {
        alert("Error in Add Prpduct");
      });
  }

  upload(id, images) {
    if (images && images.length) {
      this._productsApi.upload(id, images);
    }
  }
}
export default ProductAddPageCtrl;