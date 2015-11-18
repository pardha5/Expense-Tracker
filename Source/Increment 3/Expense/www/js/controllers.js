angular.module('starter.controllers', ['ionic', 'ui.router', 'starter.services'])

.controller('DashCtrl', function($scope) {})

.controller('LoginCtrl', function($scope) {
 // $scope.settings = {
   // enableFriends: true
//};
})

.controller('RegisterCtrl', function($scope) {
 // $scope.settings = {
   // enableFriends: true
//};
})

.controller('UpdateCtrl', function($scope) {
 // $scope.settings = {
   // enableFriends: true
//};
})


.controller('DeleteCtrl', function($scope) {
 // $scope.settings = {
   // enableFriends: true
//};
})

    .controller('AddCtrl', function($scope) {
 // $scope.settings = {
   // enableFriends: true
//};
})

 .controller('AddeCtrl', function($scope) {
 // $scope.settings = {
   // enableFriends: true
//};
})

.controller('ChartCtrl', function($scope) {
 // $scope.settings = {
   // enableFriends: true
//};
})
    
    .controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})



 .controller('LoginController', function ($scope, MongoRESTService, $state) {
    $scope.login = function (username, password) {
      console.log(username);
      var result = MongoRESTService.login(username, password, function (result) {
        console.log(result)
        if (result.length = 1) {
          $state.go('tab.dash');
        } else {
          alert('Sorry, check your credentials.')
        }

      });
    }
  })
  .controller('RegisterController', function ($scope, MongoRESTService) {
    $scope.create = function (data) {
      var id = MongoRESTService.register(data);
      console.log(id);

    }
  })

 .controller('IncomeController', function ($scope, MongoRESTService) {
    $scope.Inadd = function (data) {
      var id = MongoRESTService.incomeadd(data);
      console.log(id);

    }
  })

.controller('ExpenseController', function ($scope, MongoRESTService) {
    $scope.Exadd = function (data) {
      var id = MongoRESTService.expenseadd(data);
      console.log(id);

    }
  });
  /*.controller('HomeCtrl', function ($scope, MongoRESTService) {
    $scope.user = {};

  })*/

 