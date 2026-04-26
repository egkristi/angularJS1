app.controller("MainController", ["$scope", "$http", function($scope, $http) {
    $scope.understand = "Ekte GitHub-utviklere lastet via API!";
    $scope.inputValue = "";
    $scope.selectedPerson = null;
    $scope.selectedLanguage = null;
    $scope.people = [];
    $scope.loading = true;
    $scope.error = null;
    $scope.newPerson = "";
    $scope.newLang = "";

    function loadGitHubUsers() {
        // Fetch public GitHub users starting from a random offset
        $http.get('https://api.github.com/users?per_page=8&since=' + Math.floor(Math.random() * 10000))
            .then(function(response) {
                var users = response.data;
                var completed = 0;

                angular.forEach(users, function(user, index) {
                    var person = {
                        id: index,
                        name: user.login,
                        avatar: user.avatar_url,
                        profile: user.html_url,
                        language: [],
                        live: true
                    };
                    $scope.people.push(person);

                    // Fetch repos to get languages
                    $http.get('https://api.github.com/users/' + user.login + '/repos?per_page=10&sort=updated')
                        .then(function(repoRes) {
                            var langs = [];
                            angular.forEach(repoRes.data, function(repo) {
                                if (repo.language && langs.indexOf(repo.language) === -1) {
                                    langs.push(repo.language);
                                }
                            });
                            person.language = langs.length > 0 ? langs : ['(no public repos)'];
                            person.repos = repoRes.data.length;
                            person.live = repoRes.data.length > 0;
                        })
                        .catch(function() {
                            person.language = ['(API limit)'];
                        })
                        .finally(function() {
                            completed++;
                            if (completed === users.length) {
                                $scope.loading = false;
                            }
                        });
                });

                if (users.length === 0) {
                    $scope.loading = false;
                    $scope.error = 'No GitHub users found.';
                }
            })
            .catch(function() {
                $scope.loading = false;
                $scope.error = 'Could not load GitHub users. You may have hit the rate limit – try again in a minute.';
            });
    }

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

    $scope.removePerson = function(person) {
        var idx = $scope.people.indexOf(person);
        if (idx !== -1) {
            $scope.people.splice(idx, 1);
        }
    };

    // Initialize
    loadGitHubUsers();
}]);