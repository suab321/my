var app = angular.module('filter',[]);

app.controller('sending_data',function($scope,$http){

  $scope.send=function(){
  $http({
    method:"GET",
    url:`https://glacial-citadel-47306.herokuapp.com/api/UserSignUps/findOne?filter={"where":{"email":"${$scope.email}","password":"${$scope.password}"}}`
  }).then(res=>console.log(res)).catch(err=>console.log(err))
  }
})
