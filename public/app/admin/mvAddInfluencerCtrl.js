/*angular.module('app').controller('mvAddInfluencerCtrl', function($scope, mvAuth, mvIdentity, mvNotifier, $http){

  $scope.create = function() {
    var newUserData = {
      firstname: $scope.fname,
      lastname: $scope.lname,
      industry: $scope.industry,
      website: $scope.website,
      twitter: $scope.twitter
    };

    mvAuth.createInfluencer(newUserData).then(function() {
      mvNotifier.notify('User account created!');
      $location.path('/');
    }, function(reason) {
      mvNotifier.error(reason);
    })
  }


})
*/

function mvAddInfluencerCtrl($scope, mvInfluencer) {
   var newUserData = {
      firstname: $scope.fname,
      lastname: $scope.lname,
      industry: $scope.industry,
      website: $scope.website,
      twitter: $scope.twitter
    };

  mvInfluencer
    .create(newUserData)
    .then(function (response) {
      // use response
    });
}
angular
  .module('app')
  .controller('mvAddInfluencerCtrl', mvAddInfluencerCtrl);
