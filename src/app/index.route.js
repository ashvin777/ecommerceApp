export function routerConfig($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('main', {
      url: '/main',
      component: 'mainComponent'
    })
    .state('main.home', {
      url: '/home',
      component: 'homePageComponent'
    })
    //PRODUCTS
    .state('main.home.products', {
      url: '/products',
      component: 'productsPageComponent'
    })
    .state('main.home.product-add', {
      url: '/product-add',
      component: 'productAddPageComponent',
      params: {
        item: ''
      }
    })

    //CATEGORIES
    .state('main.home.categories', {
      url: '/categories',
      component: 'categoriesPageComponent'
    })
    .state('main.home.category-add', {
      url: '/category-add',
      component: 'categoryAddPageComponent',
      params: {
        item: ''
      }
    })

    //SUB CATEGORIES
    .state('main.home.subcategories', {
      url: '/subcategories',
      component: 'subCategoriesPageComponent'
    })
    .state('main.home.subcategory-add', {
      url: '/subcategory-add',
      component: 'subCategoryAddPageComponent',
      params: {
        item: ''
      }
    })
    ;

  $urlRouterProvider.otherwise('/main/home/categories');
}
