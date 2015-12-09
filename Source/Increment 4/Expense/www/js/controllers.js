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

.controller("ExampleController", function($scope) {
 
    $scope.labels = ["August", "September", "October", "November", "December"];
    $scope.series = ['Income', 'Expense'];
    $scope.data = [
        [65, 59, 80, 81, 56],
        [28, 48, 40, 19, 86]
    ];
 
})

.controller('DashController', function($scope,$http) {
 // $scope.settings = {
   // enableFriends: true
//};
    totexp=0;
    totinc=0;
    $http.get('https://api.mongolab.com/api/1/databases/expensetracker/collections/expense?apiKey=TBtDR-i4rKwMVVXGo4rvWkyPFyIt369K').
    success(function (data) {
        $scope.expenses = data;
        //$state.go($state.current, {}, {reload: true});
     var expensed= data;
     //console.log(expensed);
     //console.log(expensed.length);
     //console.log(expensed[1].amount);
     totexp=0;
     for(var i=0;i<expensed.length;i++)
     {
           totexp=totexp+parseInt(expensed[i].amount);
     }
     console.log(totexp);
     document.getElementById("texp").innerHTML = totexp;
        
    })
 
 $http.get('https://api.mongolab.com/api/1/databases/expensetracker/collections/income?apiKey=TBtDR-i4rKwMVVXGo4rvWkyPFyIt369K').
    success(function (data) {
        $scope.income = data;
     var incomed=data;
     //console.log(tex);
    //totinc=0;
     for(var i=0;i<incomed.length;i++)
     {
            totinc=totinc+parseInt(incomed[i].amount);
     }
        document.getElementById("tinc").innerHTML = totinc;
     var bal=0;
     console.log(totexp);
     bal=totinc-totexp;
      document.getElementById("tbal").innerHTML = bal;
     //console.log(bal);
    }) 
 
 $http.get('https://api.mongolab.com/api/1/databases/expensetracker/collections/goal?apiKey=TBtDR-i4rKwMVVXGo4rvWkyPFyIt369K').
    success(function (data) {
        $scope.goal = data;
     var goald=data;
     var len=goald.length;
     document.getElementById("tgoal").innerHTML = len;
     var cdate= new Date();
     
     
     //console.log(cdate+" && "+gdate);
     //console.log(cdate.getFullYear());
     //console.log(gdateo.getFullYear());
     
     //console.log(tmonths);
     var goaltm=goald;
     console.log(goaltm);
     for(var i=0;i<len;i++)
     {
        console.log(goald[i].name);
        var gdate= goald[i].date;
        var gdateo=new Date(gdate);
         var tmonths = (gdateo.getFullYear() - cdate.getFullYear())*12 + (gdateo.getMonth() - cdate.getMonth());
         goaltm[i].time=tmonths;
     }
     $scope.gl=goaltm;
    }) 
    
    
})

    
    .controller('InviewCtrl', function($scope,$http) {
 // $scope.settings = {
   // enableFriends: true
//};
    $http.get('https://api.mongolab.com/api/1/databases/expensetracker/collections/income?apiKey=TBtDR-i4rKwMVVXGo4rvWkyPFyIt369K').
    success(function (data) {
        $scope.incomes = data;
    }) 
  $scope.remove = function(chat) {
    //Chats.remove(chat);
  };
})


.controller('IncomeDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
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

.controller('ExviewCtrl', function($scope, $state) {
 // $scope.settings = {
   // enableFriends: true
    
//};
})

.controller('ExpenseviewCtrl', function($scope,$http, $state) {
 // $scope.settings = {
   // enableFriends: true
//};
    $http.get('https://api.mongolab.com/api/1/databases/expensetracker/collections/expense?apiKey=TBtDR-i4rKwMVVXGo4rvWkyPFyIt369K').
    success(function (data) {
        $scope.expenses = data;
        $state.go($state.current, {}, {reload: true});
    }) 
  $scope.remove = function(chat) {
    //Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AddgCtrl', function($scope) {
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

.controller('UpdateController', function ($scope, MongoRESTService) {
   /* $scope.Inadd = function (data) {
      var id = MongoRESTService.incomeadd(data);
      console.log(id);

    }*/
  })
.controller('DeleteController', function ($scope, MongoRESTService) {
   /* $scope.Inadd = function (data) {
      var id = MongoRESTService.incomeadd(data);
      console.log(id);

    }*/
  })

 .controller('LoginController', function ($scope, $http, MongoRESTService, $state) {
//    $http.get("https://api.mongolab.com/api/1/databases/expensetracker/collections/login?apiKey=TBtDR-i4rKwMVVXGo4rvWkyPFyIt369K").then(function(res) {
//        alert(JSON.stringify(res));
//    }, function(JSON.stringify(res)) {
//        alert(JSON.stringify(res));
//    });
    
    $scope.login = function (username, password) {
      //console.log(username);
        alert(username+" "+password);
      var result = MongoRESTService.login(username, password, function (result) {
        //console.log(result)
        if (result.length = 1) {
          $state.go('tab.dash');
        } else {
          alert('Sorry, check your credentials.')
        }

      });
    }
  })
  .controller('RegisterController', function ($scope, MongoRESTService,$state) {
    $scope.create = function (data) {
      var id = MongoRESTService.register(data);
      //console.log(id);

    }
    $scope.takelog = function() {
  $state.go('login');
}
    
  })

 .controller('IncomeController', function ($scope, MongoRESTService) {
    $scope.Inadd = function (data) {
      var id = MongoRESTService.incomeadd(data);
      //console.log(id);

    }
  })

.controller('ExpenseController', function ($scope, MongoRESTService, $state) {
    $scope.Exadd = function (data) {
      var id = MongoRESTService.expenseadd(data);
      //console.log(id);

    }
    $scope.exviewback = function() {
  $state.go('tab.exview');
    }
    })

.controller('GoalController', function ($scope, MongoRESTService) {
    $scope.Goaladd = function (data) {
      var id = MongoRESTService.goaladd(data);
      //console.log(id);

    }
  })
;
  /*.controller('HomeCtrl', function ($scope, MongoRESTService) {
    $scope.user = {};

  })*/

 