 var app = angular.module("testApp",[]);

 app.controller("myCtr", function($scope)
 {
     $scope.message1 ="Application To Add and Delete The Data"
 });
 app.controller("objCtr",function($scope){
    $scope.removeUser = function(user){
         var removedUser = $scope.users.indexOf(user);
         $scope.users.splice(removedUser,1)
     };
    
     $scope.addUsers = function(){

         $scope.users.push({
             Name:$scope.newName,
             Age:$scope.newAge,
             Salary:$scope.newSalary,
             Company:$scope.newCompany
         })
     }
 

     $scope.users =[
     {
         Name : "Ramesh",
         Age : 24,
         Salary : 20000,
         Company : "Jspider"
     },
     {
         Name : "Kumar",
         Age : 24,
         Salary : 15000,
         Company : "Qsipder"
     }]
 });
