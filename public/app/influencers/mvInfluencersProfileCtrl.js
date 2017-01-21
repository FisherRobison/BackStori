angular.module('app').controller('mvInfluencersProfileCtrl', function($scope, mvInfluencer, $routeParams) {
  mvInfluencer.query().$promise.then(function(collection) {
    collection.forEach(function(influencer) {
      if(influencer._id === $routeParams.id) {
        $scope.influencer = influencer;
      }
    })
  })
});
    
