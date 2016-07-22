import authService from './authenticate.factory';
import uirouter from 'angular-ui-router';


export default angular.module('app.auth', [uirouter])
  .factory('authService', authService)
  .name; //Exporta o nome do modulo pra poder por na injecao de dependencia do angular
