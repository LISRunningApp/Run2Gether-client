angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('register', {
    url: '/page6',
    templateUrl: 'templates/register.html',
    controller: 'registerCtrl'
  })

  .state('runTogether', {
    url: '/page7',
    templateUrl: 'templates/runTogether.html',
    controller: 'runTogetherCtrl'
  })

  .state('inicio', {
    url: '/page8',
    templateUrl: 'templates/inicio.html',
    controller: 'inicioCtrl'
  })

  .state('amigos', {
    url: '/page9',
    templateUrl: 'templates/amigos.html',
    controller: 'amigosCtrl'
  })

  .state('grupos', {
    url: '/page11',
    templateUrl: 'templates/grupos.html',
    controller: 'gruposCtrl'
  })

  .state('historialActividades', {
    url: '/page12',
    templateUrl: 'templates/historialActividades.html',
    controller: 'historialActividadesCtrl'
  })

  .state('profile', {
    url: '/page10',
    templateUrl: 'templates/profile.html',
    controller: 'profileCtrl'
  })

  .state('resumenActividad', {
    url: '/page13',
    templateUrl: 'templates/resumenActividad.html',
    controller: 'resumenActividadCtrl'
  })

  .state('addGrupo', {
    url: '/page14',
    templateUrl: 'templates/addGrupo.html',
    controller: 'addGrupoCtrl'
  })

  .state('addAmigo', {
    url: '/page15',
    templateUrl: 'templates/addAmigo.html',
    controller: 'addAmigoCtrl'
  })

  .state('selectAmigos', {
    url: '/page16',
    templateUrl: 'templates/selectAmigos.html',
    controller: 'selectAmigosCtrl'
  })

  .state('searchAmigo', {
    url: '/page16',
    templateUrl: 'templates/selectAmigos.html',
    controller: 'selectAmigosCtrl'
  })

  .state('running', {
    url: '/page18',
    templateUrl: 'templates/running.html',
    controller: 'runningCtrl'
  })

  .state('cronometro', {
    url: '/page19',
    templateUrl: 'templates/cronometro.html',
    controller: 'timerCtrl'
  })

$urlRouterProvider.otherwise('/page7')

  

});