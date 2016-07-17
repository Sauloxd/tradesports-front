import angular from 'angular';
import uirouter from 'angular-ui-router';

import dummyService from '../services/dummy.service';

import "font-awesome-webpack";
import 'expose?jQuery!jquery/dist/jquery.min.js';


//Flatastic NO-LOADERS Imports for home
//CSS
import "flexslider/flexslider.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "imports?$=jquery!owl.carousel/dist/assets/owl.carousel.min.css";
import "owlcarousel-pre/owl-carousel/owl.transitions.css";
import '../../../styles/flatastic.css';
//JS
import "flexslider/jquery.flexslider.js";
import "owl.carousel/dist/owl.carousel.js";
import "waypoints/lib/jquery.waypoints.min.js";
import "isotope-layout";
import 'retinajs/dist/retina';
import "imports?$=jquery!../../../js/flatastic.custom-scrollbar.js";
import 'imports?$=jquery!../../../js/flatastic.js';


import routing from './home.routes';
import HomeController from './home.controller';
export default angular.module('app.home', [uirouter, dummyService])
  .config(routing)
  .controller('HomeController', HomeController)
  .name; //Exporta o nome do modulo pra poder por na injecao de dependencia do angular