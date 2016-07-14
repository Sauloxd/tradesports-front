import angular from 'angular';

import '../styles/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};
console.log('carregou ctrl');
class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
    console.log('carregou ctrl');
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;
