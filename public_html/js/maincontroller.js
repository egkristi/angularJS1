app.controller("MainController", function($scope){
    $scope.understand = "Dette er i scope...!.!";
    $scope.inputValue = "";
    $scope.selectedPerson = 0;
	$scope.selectedGenre = null;
    $scope.people = [
        {
            id: 0,
            name: 'Per',
            language: [
                'Java',
                'HTML5',
                'HTML4',
                'BASH'
            ],
            male: true
        },
        {
            id: 1,
            name: 'Hilde',
            language: [
                'C++',
                'C#',
                'HTML4',
                'BASH'
            ],
            male: false
        },
        {
            id: 2,
            name: 'Christian',
            language: [
                'Java',
                'HTML5',
                'Javascript',
                'cgi-script'
            ],
            male: true
        },
        {
            id: 3,
            name: 'Helge',
            language: [
                'KSH',
                'Powershell',
                'J#'
            ],
            male: true
        }
    ];
    $scope.newPerson = null;
    $scope.newLang = null;
    $scope.addNew = function() {
        if ($scope.newPerson != null && $scope.newPerson != "" && $scope.newLang != null && $scope.newLang != "") {
            $scope.people.push({
                id: $scope.people.length,
                name: $scope.newPerson,
                male: true,
                language: [$scope.newLang]
            });
        }
    };
});