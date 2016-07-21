import angular from 'angular';
import uirouter from 'angular-ui-router';

import crudService from '../../factories/crud.js';
import constService from '../../factories/constants.js';

import "font-awesome-webpack";
import 'expose?jQuery!jquery/dist/jquery.min.js';


//Flatastic NO-LOADERS Imports for home
//CSS
import "bootstrap/dist/css/bootstrap.min.css";
import '../../../styles/flatastic.css';
//JS
import 'imports?$=jquery!../../../js/flatastic.js';


import routing from './home.routes';
import homeController from './home.controller';
import productDirective from '../../components/product/product-item.directive'
export default angular.module('app.modals', [uirouter, crudService])
  .config(routing)
  .controller('loginCtrl', loginCtrl)
  .name; //Exporta o nome do modulo pra poder por na injecao de dependencia do angular
