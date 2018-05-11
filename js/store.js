angular.module('hgnApp')
    .factory('hgnStorage', function ($http, $injector) {
        return $injector.get('localStorage');
    })
    .factory('localStorage',function(){

        var ID = 'Apartment';

        var store = {
			apartments: [],

			_getFromLocalStorage: function () {
				return JSON.parse(localStorage.getItem(ID) || '[]');
			},

			_saveToLocalStorage: function (todos) {
				localStorage.setItem(ID, JSON.stringify(apartments));
			},

			delete: function (todo) {
				var deferred = $q.defer();

				store.todos.splice(store.todos.indexOf(todo), 1);

				store._saveToLocalStorage(store.todos);
				deferred.resolve(store.todos);

				return deferred.promise;
			},

			get: function () {
				var deferred = $q.defer();

				angular.copy(store._getFromLocalStorage(), store.todos);
				deferred.resolve(store.todos);

				return deferred.promise;
			},

			insert: function (todo) {
				var deferred = $q.defer();

				store.todos.push(todo);

				store._saveToLocalStorage(store.todos);
				deferred.resolve(store.todos);

				return deferred.promise;
			},

			put: function (todo, index) {
				var deferred = $q.defer();

				store.todos[index] = todo;

				store._saveToLocalStorage(store.todos);
				deferred.resolve(store.todos);

				return deferred.promise;
			}
		};

		return store;
	});
