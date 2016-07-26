import angular from 'angular';
import uirouter from 'angular-ui-router';
import modal from 'angular-ui-bootstrap/src/modal';

//this shit lib does not return its name when called
import 'ngstorage/ngStorage';
const ngStorage = 'ngStorage';

import routing from './app.config';
import home from './pages/home';
import cart from './pages/cart';
import login from './pages/login/login.controller';
import auth from './authentication';
import navbarCtrl from './components/navbar/navbar.controller';

import promocao from './factories/promocao';

//Flatastic Imports


//Template Cache


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

angular.module(MODULE_NAME, [uirouter, modal, ngStorage, home, cart, login, auth, promocao])
  .config(routing)
  .controller('navbarCtrl', navbarCtrl)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;
