angular.module('firebase.config', [])
  .constant('FBURL', 'https://boiling-fire-6773.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password'])

  .constant('loginRedirectPath', '/login');
