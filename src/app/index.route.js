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
      component: 'productAddPageComponent'
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
    ;

  $urlRouterProvider.otherwise('/main/home/categories');
}
