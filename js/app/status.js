(function () {
  var app = angular.module('status', ['ui.bootstrap', 'chieffancypants.loadingBar', 'tableSort']);

  app.controller("StatusController", function($scope, $http) {

    var request = app.api + "online";

    $http.get( request )
      .success(function(data, status, header, config) {

      $scope.onlinePlayers = data.length;

      if ($scope.onlinePlayers > 0)
        $scope.players = data;

    })
      .error(function(data, status, header, config) {
      console.log("Error while retrieving online players.");
    });

  });

})()
