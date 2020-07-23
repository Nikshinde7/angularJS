var app=angular.module('myApp', ['ngMaterial','ui.router','ui.bootstrap','smart-table','ngSanitize']);

var hostUrl="http://localhost:8311/";
app.config(function($stateProvider, $urlRouterProvider) 
{

	$urlRouterProvider.otherwise('/pieChart');
 	$stateProvider

.state('pieChart', {
    
    url : '/pieChart',

    templateUrl : 'resources/modules/PieMaster/pieChart.html'
    })

.state('temp', {
    
    url : '/temp',

    templateUrl : 'resources/modules/TemperatureMaster/temp.html'
    })


.state('vendorLogin', {
    
    url : '/vendorLogin',

    templateUrl : 'resources/modules/VendorLogin/vendorLogin.html'
    })


 });

