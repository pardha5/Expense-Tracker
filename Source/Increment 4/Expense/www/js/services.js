//angular.module('starter.services', 'starter.controllers', ['ionic', 'ui.router'])
var services = angular.module("starter.services", []);
services.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Grocery',
    lastText: '200$',
    face: 'http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/simple-red-glossy-icons-business/086760-simple-red-glossy-icon-business-dollar-solid.png'
  }, {
    id: 1,
    name: 'Movie',
    lastText: '70$',
    face: 'http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/simple-red-glossy-icons-business/086760-simple-red-glossy-icon-business-dollar-solid.png'
  }, {
    id: 2,
    name: 'Clothing',
    lastText: '100$',
    face: 'http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/simple-red-glossy-icons-business/086760-simple-red-glossy-icon-business-dollar-solid.png'
  }, {
    id: 3,
    name: 'Food',
    lastText: '30$',
    face: 'http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/simple-red-glossy-icons-business/086760-simple-red-glossy-icon-business-dollar-solid.png'
  }, {
    id: 4,
    name: 'Gas',
    lastText: '50$',
    face: 'http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/simple-red-glossy-icons-business/086760-simple-red-glossy-icon-business-dollar-solid.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})



//var url = "http://pardhu:11771/Expense/";
var url = "http://expense.eu-gb.mybluemix.net/";
services.factory('MongoRESTService', function($http, $ionicPopup, $state) {
    return {
      login: function(username, password, callback) {

        var res = $http.get(url+"user"+"?name="+username+"&password="+password);

        res.success(function(data, status, headers, config) {
          console.log(data);
          callback(data);
        });
        res.error(function(data, status, headers, config) {
          console.log(data);
        });
      },

      register: function(user) {
        //console.log(user);
        var res = $http.post(url+"user", user);
          //var userdata=user;
          //console.log(name);
        res.success(function(data, status, headers, config) {
          //console.log(data);
           var alertPopup = $ionicPopup.alert({
                    title: 'Success',
                    template: 'user registered successfully.'
                    });
            window.location = "/www/index.html#/tab/login";
        });
        res.error(function(data, status, headers, config) {
         // console.log(data);
        });
      },
        
      incomeadd: function(income) {
        //console.log(income);
        var res = $http.post(url+"income", income);
          //var userdata=user;
          //console.log(name);
        res.success(function(data, status, headers, config) {
          //console.log(data);
           var alertPopup = $ionicPopup.alert({
                    title: 'Success',
                    template: 'Income Added Successfully.'
                    });
            //window.location = "/www/index.html#/tab/add";
            $state.go('tab.inview');
        });
        res.error(function(data, status, headers, config) {
         // console.log(data);
        });
      },
        
        expenseadd: function(expense) {
        //console.log(expense);
        var res = $http.post(url+"expense", expense);
          //var userdata=user;
          //console.log(name);
        res.success(function(data, status, headers, config) {
          //console.log(data);
           var alertPopup = $ionicPopup.alert({
                    title: 'Success',
                    template: 'Expense Added Successfully.'
                    });
            //window.location = "/www/index.html#/tab/adde";
            $state.go('tab.exview');
            reload:true
        });
        res.error(function(data, status, headers, config) {
          //console.log(data);
        });
      },
        
        
        goaladd: function(goal) {
        //console.log(goal);
        var res = $http.post(url+"goal", goal);
          //var userdata=user;
          //console.log(name);
        res.success(function(data, status, headers, config) {
          //console.log(data);
           var alertPopup = $ionicPopup.alert({
                    title: 'Success',
                    template: 'Goal Added Successfully.'
                    });
            window.location = "/www/index.html#/tab/addg";
        });
        res.error(function(data, status, headers, config) {
          //console.log(data);
        });
      }
        
    }
});

