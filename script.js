angular.module('myApp', [])
	.controller('ctrl', function ($scope) {
		var femalePronouns = {
			"p1": "she",
			"p2": "her",
			"p3": "her"
		};

		var malePronouns = {
			"p1": "he",
			"p2": "his",
			"p3": "him"
		}
		// work bank - initial values
		$scope.wordBank = {
			name: "name",
			jobTitle: "job title",
			tediousTask: "tedious task",
			dirtyTask: "dirty task",
			celebrity: "celebrity",
			uselessSkill: "useless skill",
			obnoxiousCeleb: "obnoxious celebrity",
			hugeNum: "huge number",
			adjective: "adjective"
		};

		// inital gender setting:
		$scope.gender = "female";
		$scope.pronouns = femalePronouns;
		

		$scope.newVal = function () {
			if ($scope.gender === 'male') {
				$scope.pronouns = malePronouns;
			} else {
				$scope.pronouns = femalePronouns;
			}
		};

	})