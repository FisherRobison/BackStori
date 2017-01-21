
angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider) {
    var routeRoleChecks = {
        admin:{
            auth: function(mvAuth){
                return mvAuth.authorizeCurrentUserForRoute('admin')
            }},
        user:{
            auth: function(mvAuth){
                return mvAuth.authorizeAuthenticatedUserForRoute()
            }}
    }

    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', { templateUrl: '/partials/main/main', controller: 'mvMainCtrl'})
        .when('/admin/users', { templateUrl: '/partials/admin/user-list', 
            controller: 'mvUserListCtrl', resolve: routeRoleChecks.admin
    }).when('/create', { templateUrl: '/partials/admin/influencer-create', 
            controller: 'mvAddInfluencerCtrl', resolve: routeRoleChecks.admin
    }).when('/signup', { templateUrl: '/partials/account/signup', 
            controller: 'mvSignupCtrl'
    }).when('/profile', { templateUrl: '/partials/account/profile', 
            controller: 'mvProfileCtrl', resolve: routeRoleChecks.user
    }).when('/courses', { templateUrl: '/partials/courses/course-list', 
            controller: 'mvCourseListCtrl'
    }).when('/courses/:id', { templateUrl: '/partials/courses/course-details', 
            controller: 'mvCourseDetailCtrl'
    }).when('/influencers', { templateUrl: '/partials/influencers/influencers-list', 
            controller: 'mvInfluencersListCtrl'
    }).when('/influencers/:id', { templateUrl: '/partials/influencers/influencers-profile', 
            controller: 'mvInfluencersProfileCtrl'
    })
});

angular.module('app').run(function($rootScope, $location) {
  $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {
    if(rejection === 'not authorized') {
      $location.path('/');
    }
  })
})