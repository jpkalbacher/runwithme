(function(root){
  var CHANGE_EVENT = "change";
  var _found_users = [];

  var resetFoundUsers = function(foundUsers){
    _found_users = foundUsers;
  };

  var handleSingleFollowerUpdate = function(followee_id){
    _found_users.forEach(function(user){
      if(user.id === followee_id) {
        user.followee = !user.followee;
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
        case UserConstants.FOLLOWEE_ID_RECEIVED:
          handleSingleFollowerUpdate(payload.followee_id);
          UserSearchStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
