'use strict';

angular.module('jhipsterApp')
    .controller('AuthorController', function ($scope, Author) {
        $scope.authors = [];
        $scope.loadAll = function() {
            Author.query(function(result) {
               $scope.authors = result;
            });
        };
        $scope.loadAll();

        $scope.delete = function (id) {
            Author.get({id: id}, function(result) {
                $scope.author = result;
                $('#deleteAuthorConfirmation').modal('show');
            });
        };

        $scope.confirmDelete = function (id) {
            Author.delete({id: id},
                function () {
                    $scope.loadAll();
                    $('#deleteAuthorConfirmation').modal('hide');
                    $scope.clear();
                });
        };

        $scope.refresh = function () {
            $scope.loadAll();
            $scope.clear();
        };

        $scope.clear = function () {
            $scope.author = {name: null, birthDate: null, id: null};
        };
    });
