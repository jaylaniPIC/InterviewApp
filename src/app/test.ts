// 'use strict';

// angular.module('interviewApp', [])
//     .component('interviewComponent', {
//         controller: function ($scope, $http, $state) {
//             $scope.users = [
//                 {
//                     id: "0",
//                     name: "name0",
//                     surname: "surname0",
//                     birthDate: "24-8-1981",
//                     phone: "634523125",
//                     city: "Wroclaw",
//                     street: "Mydlana",
//                     number: "1"
//                 },
//                 {
//                     id: "1",
//                     name: "name1",
//                     surname: "surname1",
//                     birthDate: "28-9-1983",
//                     phone: "812312312",
//                     city: "Warsaw",
//                     street: "Domaniewska",
//                     number: "2"
//                 },
//                 {
//                     id: "2",
//                     name: "name2",
//                     surname: "surname2",
//                     birthDate: "01-6-1983",
//                     phone: "987654412",
//                     city: "Wroclaw",
//                     street: "Mydlana",
//                     number: "2"
//                 },
//                 {
//                     id: "3",
//                     name: "name3",
//                     surname: "surname3",
//                     birthDate: "05-5-1978",
//                     phone: "812312312",
//                     city: "Wroclaw",
//                     street: "Himalajska"
//                 }
//             ];

//             $scope.findAll = function () {
//                 $http({
//                     method: 'GET',
//                     url: '/findall'
//                 }).success(function (data, status, headers, config) {
//                     $scope.users = data;
//                 }).error(function (data, status, headers, config) {
//                     alert('Error');
//                 });
//             };

//             $scope.find = function (userId) {
//                 $http({
//                     method: 'GET',
//                     url: '/find',
//                     data: {userId: userId}
//                 }).success(function (data, status, headers, config) {
//                     $state.go('userDetails');
//                 });
//             };

//             $scope.edit = function (user) {
//                 if (_.isArray(user)) {
//                     var ids = [];
//                     for (var i = 0; i < user.length; i++) {
//                         ids.push(user[i].id);
//                     }
//                     $http({
//                         method: 'POST',
//                         url: '/edit',
//                         data: {userId: ids},
//                     }).success(function (data, status, headers, config) {
//                         for (var i = 0; i < $scope.users.length; i++) {
//                             if($scope.users[i].id === data.id) {
//                                 $scope.users[i] === data;
//                             }
//                         }
//                         alert('User Updated');
//                     }).error(function (data, status, headers, config) {
//                         alert('Couldnt update user');
//                     });
//                 } else {
//                     $http({
//                         method: 'POST',
//                         url: '/edit',
//                         data: {userId: iser.id},
//                     }).success(function (data, status, headers, config) {
//                         $scope.users[$scope.users.indexOf(user.id)] = data;
//                         alert('User Saved');
//                     }).error(function (data, status, headers, config) {
//                         alert('Couldnt Save');
//                     });
//                 }
//             };

//             $scope.remove = function (userId) {
//                 $http({
//                     method: 'POST',
//                     url: '/remove',
//                     data: {userId: userId}
//                 }).success(function (data, status, headers, config) {
//                     var index = $scope.users.indexOf(userId);
//                     $scope.users.splice(index, 1);
//                     alert('User Removed');
//                 }).error(function (data, status, headers, config) {
//                     alert('Couldnt Remove');
//                 });
//             };
//         })

//     /    private users: array =  [
//                 {
//                     id: "0",
//                     name: "name0",
//                     surname: "surname0",
//                     birthDate: "24-8-1981",
//                     phone: "634523125",
//                     city: "Wroclaw",
//                     street: "Mydlana",
//                     number: "1"
//                 },
//                 {
//                     id: "1",
//                     name: "name1",
//                     surname: "surname1",
//                     birthDate: "28-9-1983",
//                     phone: "812312312",
//                     city: "Warsaw",
//                     street: "Domaniewska",
//                     number: "2"
//                 },
//                 {
//                     id: "2",
//                     name: "name2",
//                     surname: "surname2",
//                     birthDate: "01-6-1983",
//                     phone: "987654412",
//                     city: "Wroclaw",
//                     street: "Mydlana",
//                     number: "2"
//                 },
//                 {
//                     id: "3",
//                     name: "name3",
//                     surname: "surname3",
//                     birthDate: "05-5-1978",
//                     phone: "812312312",
//                     city: "Wroclaw",
//                     street: "Himalajska"
//                 }
//             ];


//             $scope.edit = function (user) {
//                 if (_.isArray(user)) {
//                     var ids = [];
//                     for (var i = 0; i < user.length; i++) {
//                         ids.push(user[i].id);
//                     }
//                     $http({
//                         method: 'POST',
//                         url: '/edit',
//                         data: {userId: ids},
//                     }).success(function (data, status, headers, config) {
//                         for (var i = 0; i < $scope.users.length; i++) {
//                             if($scope.users[i].id === data.id) {
//                                 $scope.users[i] === data;
//                             }
//                         }
//                         alert('User Updated');
//                     }).error(function (data, status, headers, config) {
//                         alert('Couldnt update user');
//                     });
//                 } else {
//                     $http({
//                         method: 'POST',
//                         url: '/edit',
//                         data: {userId: iser.id},
//                     }).success(function (data, status, headers, config) {
//                         $scope.users[$scope.users.indexOf(user.id)] = data;
//                         alert('User Saved');
//                     }).error(function (data, status, headers, config) {
//                         alert('Couldnt Save');
//                     });
//                 }
//             };

//          private edit = (user) => {
//             const data = {userId};
//             if(user.isArray()) {

//             }else {
//             this.http.post(/find, {}, data)
//                 .map((res) => {
//                     return this.users.push(data);
//                 })
//                 .err((err) => {
//                     this.handleError('Couldnt Edit the user');
//                 })
//             }


//         }
