angular.module('header',[])
  .directive('ngHeader',[function(){
      return {
          scope:{},
          restrict:'E',
          templateUrl:'/src/components/common/header/header.html',
          replace:true,
          controller:['$scope',function($scope){
              console.log('公共头部');
          }]
      }
  }])