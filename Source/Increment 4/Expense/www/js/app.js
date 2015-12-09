//this ionic
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'chart.js'])






/*.controller("RegisterController", function ($scope, $http, $httpParamSerializerJQLike, $ionicPopup) {

    $scope.pageClass = 'register';
$scope.register = function(username, password, email) {
   //console.log("inside login function");
$http({
    method: 'POST',
    headers: {
        'Access-Control-Allow-Headers':'*',
        'Accept': 'application/json',
        
      },
    url : 'http://pardhu:11771/ExpenseTracker/Register',
    
    data: JSON.stringify({
                name: username,
                password: password,
                email: email
            }),
    contentType: "application/json"
}).success(function() {
    var alertPopup = $ionicPopup.alert({
                    title: 'Success',
                    template: username + 'registered successfully.'
                    });
    $scope.userName ="";
    $scope.password ="";
    $scope.email ="";
    
    //$scope.msg ="User created successfully";
        })
}
    
})


.controller("LoginController", function ($scope, $http, $httpParamSerializerJQLike, $ionicPopup) {

    //$scope.pageClass = 'login';
$scope.login = function(username, password) {
   //console.log("inside login function");
	//console.log(username+ " and " + password);
    $http.get('https://api.mongolab.com/api/1/databases/expensetracker/collections/users?q={"name":"'+username+'", "password":"'+password+'"}&apiKey=TBtDR-i4rKwMVVXGo4rvWkyPFyIt369K')
            .then(function successCallback(response) {
                
                //console.log(response);
				//var user=response.data;
				//var user=JSON.stringify(response);
				//var data=JSON.parse(user);
				
				//var user=response.data[0].name;
				//console.log(user);
				//var pass=response.data[0].password;
				if(response.data[0].name==username && response.data[0].password==password)
				{
				//alert('Login Successful! Welcome ' + username + '.');
				var alertPopup = $ionicPopup.alert({
                    title: 'Success',
                    template: 'Login Successful! Welcome ' + username + '.'
                    });
                    window.location = "/www/index.html#/tab/dash";
				}
				else
				{
				alert('Login failed');
				}
				//var data=JSON.parse(user)
				/*var input1 = document.getElementById('username').value;
                localStorage.setItem('username', input1);
                var input2 = document.getElementById('password').value;
                localStorage.setItem('password', input2);*/
                //window.location = "home.html";
          /*  }, function errorCallback(response) {
                $scope.loginErr = "Login Error."
            });*/ 
    /*.success(function() {
    $scope.userName ="";
    $scope.password ="";
    $scope.email ="";
    
    $scope.msg ="User created successfully";
        })
}
    
})*/


/*.controller("IncomeController", function ($scope, $http, $httpParamSerializerJQLike, $ionicPopup) {

    $scope.pageClass = 'income';
$scope.income = function(name, amount, date) {
   //console.log("inside login function");
$http({
    method: 'POST',
    url : 'https://api.mongolab.com/api/1/databases/expensetracker/collections/income?apiKey=TBtDR-i4rKwMVVXGo4rvWkyPFyIt369K',
    data: JSON.stringify({
                name: name,
                amount: amount,
                date: date
            }),
    contentType: "application/json"
}).success(function() {
    var alertPopup = $ionicPopup.alert({
                    title: 'Success',
                    template: 'Income ' + name + ' added successfully.'
                    });
    $scope.name ="";
    $scope.amount ="";
    $scope.date ="";
    
    //$scope.msg ="Income Added successfully";
        })
}
    
})


.controller('UpdateController', function ($scope, $http, $httpParamSerializerJQLike, $ionicPopup) {

    //$scope.pageClass = 'update';
    $scope.update = function(username, oldpass, newpass) {
  
    $http({
        method: 'PUT',
        url : 'https://api.mongolab.com/api/1/databases/expensetracker/collections/users?q={"name":"'+username+'","password":"'+oldpass+'"}&apiKey=TBtDR-i4rKwMVVXGo4rvWkyPFyIt369K',
        data: JSON.stringify( { "$set" : { "password" : newpass } } ),
        contentType: "application/json"
    }).success(function(data) {
       // console.log(data);
        var alertPopup = $ionicPopup.alert({
                title: 'Update Done !',
                okText: 'Check Details'
        });
        alertPopup.then(function() {            
             
            //window.location.assign("");
        });
    })
    }    
})


.controller('DeleteController', function ($scope, $http, $httpParamSerializerJQLike, $ionicPopup) {


 $scope.delete = function(username, password) {
  
        $http({
            method: 'DELETE',
            url : 'https://api.mongolab.com/api/1/databases/expensetracker/collections/users?q={"name":"'+username+'","password":"'+password+'"}&apiKey=TBtDR-i4rKwMVVXGo4rvWkyPFyIt369K',
            contentType: "application/json"
        }).success(function(data) {
            //console.log(data);
            //data.delete({"name":"username","password":"password"});
            var alertPopup = $ionicPopup.alert({
                title: 'User Deleted',
                okText: 'Check Details'
            });
            alertPopup.then(function() {            
                //window.location.assign("");
        });
    })
    }
})*/



    .run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
   
.state('main',{
  url:'/expense',
      abstract:true,
      template:'<ion-nav-view name="Dashboard"></ion-nav-view>'
  })
      
  
  .state('login', {
    url: '/login',
     templateUrl: 'templates/tab-login.html',
        controller: 'LoginCtrl'
     /* views: {
      'tab-login': {
        
      }
    }*/
  })
  
  
  .state('register', {
    url: '/register',
     templateUrl: 'templates/tab-register.html',
        controller: 'RegisterCtrl'
     /* views: {
      'tab-register': {
         
      }
    }*/
  })
  
  .state('update', {
    url: '/update',
     templateUrl: 'templates/tab-update.html',
        controller: 'UpdateCtrl'
      /*views: {
      'tab-update': {
       
      }
    }*/
  })
  
  .state('delete', {
    url: '/delete',
    templateUrl: 'templates/tab-delete.html',
        controller: 'DeleteCtrl'
      /*views: {
      'tab-delete': {
        
      }
    }*/
  })
  
  
  // Each tab has its own nav history stack:

   .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
  
      .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

      
     
       .state('tab.inview', {
    url: '/inview',
    views: {
      'tab-inview': {
        templateUrl: 'templates/tab-inview.html',
        controller: 'InviewCtrl'
      }
    }
  })
  
  .state('tab.income-detail', {
      url: '/inview/:chatId',
      views: {
        'tab-inview': {
          templateUrl: 'templates/income-detail.html',
          controller: 'IncomeDetailCtrl'
        }
      }
    })
      
      .state('add', {
    url: '/inview/add',
    templateUrl: 'templates/tab-add.html',
        controller: 'AddCtrl'
      /*views: {
      'tab-add': {
        
      }
    }*/
  })
  
  
  
  .state('tab.exview', {
    url: '/exview',
    views: {
      'tab-exview': {
        templateUrl: 'templates/tab-exview.html',
        controller: 'ExviewCtrl'
      }
    }
  })
  
  .state('tab.chat-detail', {
      url: '/exview/:chatId',
      views: {
        'tab-exview': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })
  
  .state('adde', {
    url: '/exview/adde',
     templateUrl: 'templates/tab-adde.html',
        controller: 'AddeCtrl'
     /* views: {
      'tab-exview': {
        
      }
    }*/
  })

  
   .state('tab.addg', {
    url: '/addg',
    views: {
      'tab-addg': {
        templateUrl: 'templates/tab-addg.html',
        controller: 'AddgCtrl'
      }
    }
  })

 .state('tab.charts', {
    url: '/charts',
    views: {
      'tab-charts': {
        templateUrl: 'templates/tab-charts.html',
        controller: 'ExampleController'
      }
    }
  })
      
.state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });
    
    


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/register');

});

