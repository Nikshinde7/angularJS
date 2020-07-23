app.controller("tempController",function($state,$scope){

   alert("Hieeee");

$scope.abc=null;
$scope.def={};
$scope.obj={};


function weather() {

  var location = document.getElementById("location");
  var apiKey = 'f536d4c3330c0a1391370d1443cee848'; // PLEASE SIGN UP FOR YOUR OWN API KEY
  var url = 'https://api.forecast.io/forecast/';

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    location.innerHTML = 'Latitude is ' + latitude + '° <br> Longitude is ' + longitude + '°';

     $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?callback=?", function(data) {
      $('#temp').html(data.currently.temperature + '° F');
      alert(JSON.stringify(data.currently.temperature));
      $scope.abc=data;
      $scope.def=$scope.abc;
      $scope.im=$scope.abc.currently.temperature;
    alert("we got it "+$scope.abc.currently.temperature);
      // $('#minutely').html(data.minutely.summary);
      $scope.imdone();
    });


    alert("we got it 2nd "+JSON.stringify($scope.def));
  }


  $scope.imdone=function(){
  	$scope.im2=$scope.im;
  	$scope.im2-=32;
  	$scope.im2*=5;
  	$scope.im2/=9;
  	alert($scope.im2+" In celsius0");
  }



   function error() {
    location.innerHTML = "Unable to retrieve your location";
  }

  location.innerHTML = "Locating...";
}

weather();

})
