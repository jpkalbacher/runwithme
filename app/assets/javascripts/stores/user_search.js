(function(root){
  var CHANGE_EVENT = "change";
  var _found_users = [];

  var resetFoundUsers = function(foundUsers){
    _found_users = foundUsers;
  };

  var handleSingleFollowerUpdate = function(user){
    _found_users.forEach(function(found_user){
      if(found_user === user) {
        found_user.followee = !found_user.followee;
      }
    });
  };

  root.UserSearchStore = $.extend({}, EventEmitter.prototype, {
    addSearchChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeSearchChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    all: function(){
      return _found_users;
    },

    dispatcherId: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case UserConstants.FOUND_USERS_RECEIVED:
          resetFoundUsers(payload.found_users);
          UserSearchStore.emit(CHANGE_EVENT);
          break;
        case UserConstants.USER_RECEIVED:
          handleSingleFollowerUpdate(payload.user);
          UserSearchStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
