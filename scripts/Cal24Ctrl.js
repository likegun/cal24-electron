'use strict';
require('babel-register');
var Cal24 = require('./lib/cal24.js').default;

var Cal24Ctrl = angular.module('Cal24Ctrl', []);
Cal24Ctrl.controller('AdminCtrl', ['$scope', function ($scope) {
	var cal24 = $scope.cal24 = new Cal24();

	//初始化游戏
	$scope.showAnswer = false; //答案默认不显示
	cal24.newGame();

	console.log(cal24.results);

	$scope.newGame = function () {
		cal24.newGame();
		$scope.showAnswer = false;
	}
}]);