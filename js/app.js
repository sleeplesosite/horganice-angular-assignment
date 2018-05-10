angular.module('hgnApp', ['ngRoute'])
    .controller('MainCtrl', function ($scope, $http) {
        $http({
            method: 'GET',
            url: 'dataset.json'
        }).then(function (res) {
            $scope.dataset = res.data
        }, function (error) {
        });
        $scope.controllerName = 'This is Home page';
        console.log('Thmis is a log from controller');

        $scope.search = function (item) {
            if ($scope.searchBox == undefined) {
                return true;
            }
            else {
                if (item.apartmentAdress != -1 || item.apartmentName != -1) {
                    return true;
                }
            }

        return false;
        }
    })
    .controller('HomeCtrl', function ($scope) {
        //        console.log('Thmis is a log from controller2');
        $scope.controllerName = 'This is Home page';
    })
    .controller('ApartmentCtrl', function ($scope, $http) {
        console.log('Thmis is a log from controller');
        //console.log('This is apartment controller');

    })
    .controller('page3Ctrl', function ($scope) {
        $scope.controllerName = 'This is page3 page'
        console.log('This is P3 controller');
    })
    .config(function ($routeProvider) {
        $routeProvider
            .when(
                '/', {
                    controller: 'Homectrl',
                    templateUrl: '/home.html'
                }
            );
    });
