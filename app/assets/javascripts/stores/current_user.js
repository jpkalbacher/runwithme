(function(root){
  var CHANGE_EVENT = "change";
  var _currentUser = {};

  var resetCurrentUser = function(currentUser){
    _currentUser = currentUser;
  };

  root.CurrentUserStore = $.extend({}, EventEmitter.prototype, {
    addCurrentUserChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeCurrentUserChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    currentUser: function(){
      return _currentUser;
    },

    dispatcherId: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case UserConstants.CURRENT_USER_RECEIVED:
          resetCurrentUser(payload.currentUser);
          CurrentUserStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
