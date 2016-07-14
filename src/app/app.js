import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import home from './pages/home';
//Flatastic Imports



// let app = () => {
//   return {
//     template: require('./app.html'),
//     controller: 'AppCtrl',
//     controllerAs: 'app'
//   }
// };
console.log('carregou ctrl');
class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
    console.log('carregou ctrl');
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter, home])
  .config(routing)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;
