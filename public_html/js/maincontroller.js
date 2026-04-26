app.controller("MainController", ["$scope", function($scope) {
    $scope.understand = "Dette er i scope...!.!";
    $scope.inputValue = "";
    $scope.selectedPerson = null;
    $scope.selectedLanguage = null;
    $scope.people = [
        {
            id: 0,
            name: 'Per',
            language: ['Java', 'HTML5', 'HTML4', 'BASH'],
            live: true
        },
        {
            id: 1,
            name: 'Hilde',
            language: ['C++', 'C#', 'HTML4', 'BASH'],
            live: true
        },
        {
            id: 2,
            name: 'Christian',
            language: ['Java', 'HTML5', 'Javascript', 'CGI'],
            live: false
        },
        {
            id: 3,
            name: 'Helge',
            language: ['KSH', 'Powershell', 'J#'],
            live: true
        }
    ];
    $scope.newPerson = "";
    $scope.newLang = "";
    $scope.addNew = function() {
        if ($scope.newPerson && $scope.newLang) {
            $scope.people.push({
                id: $scope.people.length,
                name: $scope.newPerson,
                live: true,
                language: [$scope.newLang]
            });
            $scope.newPerson = "";
            $scope.newLang = "";
        }
    };
    $scope.formatLanguages = function(langs) {
        return langs.join(", ");
    };
    $scope.removePerson = function(person) {
        var idx = $scope.people.indexOf(person);
        if (idx !== -1) {
            $scope.people.splice(idx, 1);
        }
    };
}]);