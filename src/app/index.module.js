/* global moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import './components';
import './pages';

angular.module('ecommerceapp', [
  'ui.router',
  'ui.bootstrap',
  'ecommerceapp.components',
  'ecommerceapp.pages'
])
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock);