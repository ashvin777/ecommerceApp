import BaseApi from './base-api';
import ProductsApi from './products-api';
import CategoriesApi from './categories-api';
import ExportExcel from './export-excel';
import SubCategoriesApi from './subcategories-api';
import ImagesApi from './images-api';

angular.module('ecommerceapp.services', [])
  .service('baseApi', BaseApi)
  .service('productsApi', ProductsApi)
  .service('categoriesApi', CategoriesApi)
  .service('exportExcel', ExportExcel)
  .service('subCategoriesApi', SubCategoriesApi)
  .service('imagesApi', ImagesApi)
  ;
