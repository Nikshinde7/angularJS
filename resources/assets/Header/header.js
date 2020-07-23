app.controller('headerCntrl', function($scope,$window,headerService) {
    
$scope.headerObj={};
/*$scope.headerObj.branchId=8;*/

$scope.brachObj1={};
$scope.topBranchName=function(){


//alert("hiiiii");
  var obj=JSON.parse($window.sessionStorage.getItem('branchMaster'));
  $scope.brachObj1.branchName=obj.branchMaster.branchName;
}
$scope.topBranchName();

/*$.fn.goSecondPage = function(){

  $window.open("file:///C:/Users/diksha%20gawali/Desktop/BDM/BDM%2024-07-2018/bdmFinalFronEnd/index.html#/login",'_blank');
}

$.fn.closePage=function(){

  window.close();
}

$scope.reloadPage=function(){
  $(this).goSecondPage();
  $(this).closePage();

}*/


 $scope.headerObj.staffId=$window.sessionStorage.getItem('staffId');
 console.log("login user id is"+JSON.stringify($scope.headerObj.staffId));
 
       $scope.headerObj.staffName=$window.sessionStorage.getItem('staffName');


       var obj1=JSON.parse($window.sessionStorage.getItem('branchMaster'));
  console.log("branch master Obj dashbord"+JSON.stringify(obj1));
$scope.headerObj.branchId=obj1.branchMaster.branchId;
console.log("branch master Obj dashbord1"+JSON.stringify($scope.headerObj.branchId));



 $scope.branchList=[];
	 $scope.getStaffWiseBranchList=function()
	 {
	 	//alert("a");
	 	headerService.getStaffWiseBranchListService($scope.headerObj).then(function(response)
	 	{
	 		//console.log("branch"+JSON.stringify(response));

	 		$scope.branchList=response.data.result;
	 		//console.log("branch"+JSON.stringify($scope.branchList));

	 	})

	 }
	 $scope.getStaffWiseBranchList();
    
     
    
$scope.getDateWiseAppointCountFun=function(headerObj){
// alert("a");
  //console.log("headerObj is"+JSON.stringify(headerObj));
    
         headerService.getDateWiseAppointCountFunService(headerObj).then(function(response){
    
     // console.log("kkkkkkkkkk11111k"+JSON.stringify(response));
       $scope.getDateWiseAppointCount=response.data.result;
      
      //console.log("kkkkkkkkkkk"+JSON.stringify( $scope.getDateWiseAppointCount));
      
    })
    
  }
   $scope.getDateWiseAppointCountFun($scope.headerObj);
    
  
    
    
$scope.getFollowUpCount=function(headerObj){
	//console.log("kkkkkkkkkk11111k"+JSON.stringify(headerObj));
    
    headerService.getFollowUpCountService(headerObj).then(function(response){
      
      //console.log("kkkkkkkkkk11111k"+JSON.stringify(response));
      
      console.log(JSON.stringify(response));
      $scope.headerObj.leadcount=response.data.result;
      
      console.log("Count"+JSON.stringify( $scope.headerObj.leadcount));
      
    })
    
  }

$scope.getFollowUpCount($scope.headerObj);


$scope.getDateWiseAppointCountListFun=function()
   {
    //alert("a");
    headerService.getDateWiseAppointCountListFunService($scope.headerObj).then(function(response)
    {
      console.log("appointment list response is"+JSON.stringify(response));

      $scope.getDateWiseAppointCountList=response.data.result;
      console.log("appointment list is"+JSON.stringify($scope.getDateWiseAppointCountList));

    })

   }
   $scope.getDateWiseAppointCountListFun();



 $scope.dailyLeadObj={};

    $scope.dailyLeadObj.staffId=$window.sessionStorage.getItem('staffId');
 console.log("login user id is"+JSON.stringify($scope.dailyLeadObj.staffId));
 
   var obj1=JSON.parse($window.sessionStorage.getItem('branchMaster'));
  console.log("branch master Obj dashbord"+JSON.stringify(obj1));
$scope.dailyLeadObj.branchId=obj1.branchMaster.branchId;
console.log("branch master Obj dashbord1"+JSON.stringify($scope.dailyLeadObj.branchId));

   $scope.getDailyLeadFollowupList=function(dailyLeadObj)
   {
        // alert("a");
       // console.log("lead"+JSON.stringify(dailyLeadObj));

    //alert("a");getDailyLeadFollowupListService
    headerService.getDailyLeadFollowupListService(dailyLeadObj).then(function(response)
    {
      //console.log("lead"+JSON.stringify(response));

      $scope.LeadList=response.data.result;
      console.log("Daily lead"+JSON.stringify($scope.LeadList));

    })

   }
    
    $scope.getDailyLeadFollowupList($scope.dailyLeadObj);
    
})




app.service('headerService',function($http)
{

this.getStaffWiseBranchListService=function(headerObj)
{
	//alert("b");
			return $http.post(hostUrl+"getStaffWiseBranchList.json",headerObj);

}

this.getDailyLeadFollowupListService=function(dailyLeadObj)
{
  //alert("b");
      return $http.post(hostUrl+"getDailyLeadRecord.json",dailyLeadObj);

}

this.getDateWiseAppointCountFunService=function(headerObj)
{
	//alert("b");
			return $http.post(hostUrl+"getDateWiseAppointCount.json",headerObj);

}

this.getFollowUpCountService=function(headerObj)
{
 // alert("hello");
      return $http.post(hostUrl+"getFollowUpCount.json",headerObj);

}

this.getDateWiseAppointCountListFunService=function(headerObj)
{
  //alert("b");
      return $http.post(hostUrl+"getDateWiseAppointCountList.json",headerObj);

}

});
