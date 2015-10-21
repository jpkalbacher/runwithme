(function(root){
  var CHANGE_EVENT = "change";
  var _following = [];

  var resetFollowing = function(following){
    _following = following;
  };

  var handleSingleFollowingUpdate = function(user){
    var idx = -1;

    for(var i = 0; i < _following.length; i++) {
      if(_following[i].id == user.id && user.followee === false){
        idx = i;
        _following.splice(idx, 1);
        break;
      }
    }
    if (idx == -1) {
      _following.push(user);
    }    
  };

  root.FollowingStore = $.extend({}, EventEmitter.prototype, {
    addFollowingChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeFollowingChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    all: function(){
      return _following;
    },

    dispatcherId: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case UserConstants.FOUND_FOLLOWING:
          resetFollowing(payload.following);
          FollowingStore.emit(CHANGE_EVENT);
          break;
        case UserConstants.USER_RECEIVED:
          handleSingleFollowingUpdate(payload.user);
          FollowingStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
