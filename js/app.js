angular.module('hgnApp', ['ngRoute'])
    .controller('MainCtrl', function ($scope, $http, ApartmentStorage) {
        $http({
            method: 'GET',
            url: 'dataset.json'
        })
            .then(function (res) {
                $scope.dataset = res.data
            }, function (error) {
            });
        ApartmentStorage.newEntries = ApartmentStorage._getFromLocalStorage();
        var apartments = $scope.apartments = ApartmentStorage.newEntries;
        $scope.addapartment = function ($localStorage) {
            var newEntry = {
                apartmentId: $scope.newApt.apartmentId,
                apartmentName: $scope.newApt.apartmentName,
                apartmentAddress: $scope.newApt.apartmentAddress,
                apartmentPhoneNo: $scope.newApt.apartmentPhoneNo
            }
            /*  $scope.Apartments.push({
                  apartmentId: $scope.newApt.apartmentId,
                  apartmentName: $scope.newApt.apartmentName,
                  apartmentAddress: $scope.newApt.apartmentAddress,
                  apartmentPhoneNo: $scope.newApt.apartmentPhoneNo
              });*/
            if (!newEntry.apartmentId) {
                return;
            }

            $scope.saving = true;
            ApartmentStorage.newEntries.push(newEntry);
            ApartmentStorage.newEntries[ApartmentStorage.newEntries.indexOf(ApartmentStorage.newEntries)] = newEntry;
            ApartmentStorage._saveToLocalStorage(ApartmentStorage.newEntries)
            $scope.newEntry = '';
            $scope.saving = false;

            $scope.NEW = JSON.parse(localStorage.getItem("apartmentList") || '[]');
            //$scope.test = newEntries.apartments.indexOf(newEntries.apartments);
            console.log('Add to localstr');
            function appendToStorage(name, data) {
                var old = localStorage.getItem(name);
                if (old === null) old = "";
                localStorage.setItem(name, old + data);
            }

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
        //localStorage.setItem("Apartments", JSON.stringify($scope.Apartments)); 
        //localStorage.setItem("apartmentList", JSON.stringify($scope.Apartments));
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
    .controller('ApartmentdetialCtrl', function ($scope, $routeParams, ApartmentStorage) {
        $scope.controllerName = 'This is ApartmentdetialCtrl'
        console.log('This is aptdetial controller');
        var apartmentId = $scope.apartmentId = $routeParams.apartmentId;
        var allapartmentdetial = $scope.allapartmentdetial = JSON.parse(localStorage.getItem("apartmentList") || '[]');
        var findapartment = allapartmentdetial.find(function (item, i) {
            if (item.apartmentId === apartmentId) {
                //console.log('findfuc' + i);
                index = i;
                return item;
            }
        })
        $scope.apartmentdetial = findapartment;
        $scope.removeapartment = function ($scope) {
            var isConfirm = confirm('Are you absolutely sure you want to delete?');
            if(isConfirm){
        allapartmentdetial.find(function (item, i) {
                if (item.apartmentId === apartmentId) {
                    index = i;
                    //console.log('delete inex  ' + index); 
                    return  allapartmentdetial.splice(index,1);
                }    
            })
        
            ApartmentStorage._saveToLocalStorage(allapartmentdetial)
        }
    }
        $scope.editapartment = function ($localStorage, $scope) {
            console.log('This is edit func');
        }
    }
    )
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
                    controller: 'MainCtrl',
                    templateUrl: '/addapartment.html'
                }
            )
            .when(
                '/apartments/:apartmentId', {
                    controller: 'ApartmentdetialCtrl',
                    templateUrl: '/apartments_detial.html'
                }
            )
            .when(
                '/apartment_edit/:apartmentId', {
                    controller: 'ApartmentdetialCtrl',
                    templateUrl: '/apartment_edit.html'
                }
            )
    });

