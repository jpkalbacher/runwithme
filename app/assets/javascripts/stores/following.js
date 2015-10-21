(function(root){
  var CHANGE_EVENT = "change";
  var _following = [];

  var resetFollowing = function(following){
    _following = following;
  };

  var handleSingleFollowingUpdate = function(following_id){
    debugger;
    _following.forEach(function(user){
      if(user.id === followee_id) {
        user.followee = !user.followee;
      }
    });
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
        case UserConstants.FOLLOWEE_ID_RECEIVED:
          handleSingleFollowingUpdate(payload.followee_id);
          FollowingStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
