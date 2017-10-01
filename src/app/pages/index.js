import MainComponent from './main.component';
import HomePageComponent from './home/home.component';
import ProductsPageComponent from './products/products.component';
import ProductAddPageComponent from './product-add/product-add.component';
import CategoriesPageComponent from './categories/categories.component';
import CategoryAddPageComponent from './category-add/category-add.component';

angular.module('ecommerceapp.pages', [])
  .component('mainComponent', MainComponent)
  .component('homePageComponent', HomePageComponent)
  .component('productsPageComponent', ProductsPageComponent)
  .component('productAddPageComponent', ProductAddPageComponent)
  .component('categoriesPageComponent', CategoriesPageComponent)
  .component('categoryAddPageComponent', CategoryAddPageComponent)
  ;