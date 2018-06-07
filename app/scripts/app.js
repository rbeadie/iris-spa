'use strict'

angular.module('irisApp', ['ngRoute','irisApp.version'])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
        when('/view1', {
        template: '<p>This is a template</p> '
        }).
        when('/view2', {
        template: '<p>This, too, is a template</p> '
        }).
        otherwise({
        redirectTo: '/'
        })

        // $locationProvider.html5Mode(true)
    }])
    // .controller('MainCtrl', ['$scope', '$http', '$uibModal', '$timeout', '$cookies', '$cookieStore', MainCtrl])

