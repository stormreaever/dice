angular.module('roll', ['ngAnimate'])
.controller('rollController', ['$scope', function($scope) {
  $scope.roll = "";
  $scope.lastName = "Doe";

  $scope.cards = [];


  $scope.rollDice = function() {

    var roll = $scope.roll;
    if (roll == '') {
      roll = '1d20';
    }

    var result = new DiceRoll(roll);

    console.log(result.expression);

    $scope.cards.push({
      "total": result.expression.result,
      "rendered": result.expression.toDetails(),
      "roll": roll
    });

  };

  $scope.diceBtn = function(roll) {
    $scope.roll = roll;
    $scope.rollDice();
  };

  // roll dice on enter key in main input
  $scope.rollKeyPress = function(e) {
    if (e.keyCode == 13) { //return key press
      $scope.rollDice();
    }
  };

}]);
