
function mvInfluencer($http) {
  this.create = function create(nerdData) {
    return  $http.post('/api/influencers/create', nerdData);
  };
}
angular
  .module('app')
  .service('mvInfluencer', mvInfluencer);