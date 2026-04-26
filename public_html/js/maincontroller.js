app.controller("MainController", function($scope){
    $scope.understand = "Dette er i scope...!.!";
    $scope.inputValue = "";
    $scope.selectedPerson = null;
    $scope.selectedLanguage = null;
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
            male: true,
            live: true
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
            male: false,
            live: true
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
            male: true,
            live: false
        },
        {
            id: 3,
            name: 'Helge',
            language: [
                'KSH',
                'Powershell',
                'J#'
            ],
            male: true,
            live: true
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
                live: true,
                language: [$scope.newLang]
            });
            $scope.newPerson = null;
            $scope.newLang = null;
        }
    };
});