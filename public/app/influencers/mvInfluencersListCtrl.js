angular.module('app').controller('mvInfluencersListCtrl', function($scope, mvInfluencer){
    $scope.influencers = mvInfluencer.query();

    $scope.sortOptions = [{value: "title",text: "Sort by Title"},
    {value: "published",text: "Sort by Publish Date"}];

    $scope.sortOrder = $scope.sortOptions[0].value;
    
})