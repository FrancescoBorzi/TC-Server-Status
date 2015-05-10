(function () {
  var app = angular.module('status', ['ui.bootstrap', 'chieffancypants.loadingBar', 'tableSort']);

  app.controller("StatusController", function($scope, $http) {

    var request = app.api + "online";

    $http.get( request )
      .success(function(data, status, header, config) {

      $scope.onlinePlayers = data.length;

      if ($scope.onlinePlayers > 0) {
        $scope.players = data;

        $scope.players.forEach(function(player) {

          switch (player.race) {
            case 2:
            case 5:
            case 6:
            case 8:
            case 9:
            case 10:
              player.faction = "horde";
              break;

            case 1:
            case 3:
            case 4:
            case 7:
            case 11:
              player.faction = "alliance";
              break;
          }

        });
      }

    })
      .error(function(data, status, header, config) {
      console.log("Error while retrieving online players.");
    });

  });

})()
