import MainComponent from './main.component';
import HomePageComponent from './home/home.component';

angular.module('ecommerceapp.pages', [])
  .component('mainComponent', MainComponent)
  .component('homePageComponent', HomePageComponent)
  ;