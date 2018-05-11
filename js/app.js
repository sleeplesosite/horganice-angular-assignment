angular.module('hgnApp', ['ngRoute', 'ngStorage'])
    .controller('MainCtrl', function ($scope, $http) {
        $http({
            method: 'GET',
            url: 'dataset.json'
        })
            .then(function (res) {
                $scope.dataset = res.data
            }, function (error) {
            });
        
        $scope.addapartment = function ($localStorage) {
            $scope.Apartments.push({
                apartmentId: $scope.newApt.apartmentId,
                apartmentName: $scope.newApt.apartmentName,
                apartmentAddress: $scope.newApt.apartmentAddress,
                apartmentPhoneNo: $scope.newApt.apartmentPhoneNo
            });
            localStorage.setItem("Apt", JSON.stringify($scope.Apartments));
            //$scope.wocal = JSON.parse(localStorage.getItem("Apt") || '[]');
            console.log('Add to localstr');
        };
        $scope.controllerName = 'This is Home page';
        console.log('This is a log from  Maincontroller');
        $scope.Apartments = [
            {
                apartmentId: "on1Al20f43",
                apartmentName: "หอพักร่มเย็น",
                apartmentAddress: "523/2 ถ.สองทุ่ง ต.ท่าน้อย อ.เมือง นครราชศรีมา",
                apartmentPhoneNo: "0818682211"
            },
            {
                apartmentId: "MMD289sSA",
                apartmentName: "หอพักกาญกนก",
                apartmentAddress: "56 หมู่ 3 ถ.เนตรทิพย์ ต.ศรีใหญ่ อ.เมือง ลำปาง",
                apartmentPhoneNo: "089-2294657"
            },
            {
                apartmentId: "NJslp37KK",
                apartmentName: "หอใจดี",
                apartmentAddress: "11/11 ถ.นาน้อย ต.ตาปี อ.เมือง พิษณุโลก",
                apartmentPhoneNo: "082034849, 0872234890"
            },
            {
                apartmentId: "LKNAS034",
                apartmentName: "หอพักร่มเย็น",
                apartmentAddress: "32/23 ต.ชัยชาญ อ.บ้านดาด เชียงราย",
                apartmentPhoneNo: null
            },
            {
                apartmentId: "M160KSD0s",
                apartmentName: "Lucky Apartment",
                apartmentAddress: "523/2 ถ.มหิดล ต.สายธาร อ.เมือง หนองคาย",
                apartmentPhoneNo: "086-282-2859"
            }
        ]
        /*         $scope.search = function (item) {
                    if ($scope.searchBox == undefined) {
                        return true;
                    }
                    else {
                        if (item.apartmentAdress != -1 || item.apartmentName != -1) {
                            return true;
                        }
                    }
        
                return false;
                } */
    })
    .controller('ApartmentCtrl', ['$scope', function ($scope) {
        console.log('This is a log from Apartmentcontroller');
        //console.log('This is apartment controller');
    }])


    .controller('page3Ctrl', function ($scope) {
        $scope.controllerName = 'This is page3 page'
        console.log('This is P3 controller');
    })
    .config(function ($routeProvider) {
        $routeProvider
            .when(
                '/', {
                    controller: 'MainCtrl',
                    templateUrl: '/home.html'
                }
            )
            .when(
                '/addapartments', {
                    controller: 'ApartmentCtrl',
                    templateUrl: '/addapartment.html'
                }
            )
    });

