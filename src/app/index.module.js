/* global moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import './components';
import './pages';
import './services';

angular.module('ecommerceapp', [
  'ui.router',
  'ui.bootstrap',
  'ngFileUpload',
  'ecommerceapp.components',
  'ecommerceapp.pages',
  'ecommerceapp.services',
])
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock);
