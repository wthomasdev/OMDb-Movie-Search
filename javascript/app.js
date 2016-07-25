// app.js
var movieApp = angular.module('movieApp', ['ui.router']);

movieApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
//z


.state('search', {
    url: '/?query',
    templateUrl: '/partials/search.html',
    controller: 'httpController'
})

.state('show', {
    url: '/show?i',
    templateUrl: '/partials/show.html',
    controller: 'showController'
})


});
