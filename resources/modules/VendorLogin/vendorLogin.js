app.controller("vendorLoginController",function($state,$scope,vendorLoginService){


    $scope.vendorRegistrationObj={};

    $scope.login=function(vendorLoginObj){
        
        alert(JSON.stringify($scope.vendorLoginObj));
        
        vendorLoginService.vendorLogin(vendorLoginObj).then(function(response)
         {
             if(response.data.statusCode == 200)
             {
                 
                 alert("Registered Successfully");
                 
                  alert(response.data.result);
                 //$state.go();
             }
             else
             {
                alert("Incorrect Username And Password");
             }
         })

    }


    
    });
    
    
app.service('vendorLoginService',function($http){

	this.vendorLogin=function(vendorLoginObj){
    
    return $http.post(hostUrl+"vendorLogin",vendorLoginObj);
  }


});