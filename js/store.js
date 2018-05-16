angular.module('hgnApp')
	.factory('hgnStorage', function ($http, $injector) {
		return $injector.get('ApartmentStorage');
	})
	.factory('ApartmentStorage', function () {
		var STORAGE_KEY = "apartmentList"
		var newEntries = {
			apartments: [],
			
			_getFromLocalStorage: function () {
				return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
				console.log('get to localstr lawoy');
			},

			_saveToLocalStorage: function (apartments) {
				localStorage.setItem(STORAGE_KEY, JSON.stringify(apartments));
			}
		}
		//console.log('Add to localstr lawoy');
		return newEntries;
	});
