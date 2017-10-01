import BaseApi from './base-api';
import ProductsApi from './products-api';
import CategoriesApi from './categories-api';
import ExportExcel from './export-excel';

angular.module('ecommerceapp.services', [])
  .service('baseApi', BaseApi)
  .service('productsApi', ProductsApi)
  .service('categoriesApi', CategoriesApi)
  .service('exportExcel', ExportExcel)
  ;
