angular.module('app').factory('mvUser', function($resource) {
  var UserResource = $resource('/api/users/:id', {
    _id: "@id"
  });

  UserResource.prototype.isAdmin = function() {
    return this.roles && this.roles.indexOf('admin') > -1;
  };
  
  UserResource.prototype.getHistory = function(secret_key) {
    if(secret_key === 'demo_key') {
      return this.history;
    } else {
      return false;
    }
  };

  return UserResource;
});
