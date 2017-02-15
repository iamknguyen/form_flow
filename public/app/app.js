angular.module('formApp', [
  'ui.router',
  'app.services',
  'app.splash'
])
  .config(config);

function config ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/splash');

  $stateProvider
    .state('splash', {
      url: '/splash',
      templateUrl: 'app/components/splash/splash.html',
      controller: 'SplashCtrl as vm'
    })

    .state('name', {
      url: '/name',
      templateUrl: 'app/components/form.name/form.name.html',
      controller: 'SplashCtrl as vm'
    })
    .state('email', {
      url: '/email',
      templateUrl: 'app/components/form.email/form.email.html',
      controller: 'SplashCtrl as vm'
    })
    .state('finish', {
      url: '/finish',
      templateUrl: 'app/components/form.finish/form.finish.html',
      controller: 'SplashCtrl as vm'
    });
}

