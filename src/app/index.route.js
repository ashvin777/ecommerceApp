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
    });

  $urlRouterProvider.otherwise('/main/home');
}
