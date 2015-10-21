(function(root){
  var CHANGE_EVENT = "change";
  var _followers = [];

  var resetFollowers = function(followers){
    _followers = followers;
  };

  var handleSingleFollowerUpdate = function(followee_id){
    _followers.forEach(function(user){
      if(user.id === followee_id) {
        user.followee = !user.followee;
      }
    });
  };

  root.FollowersStore = $.extend({}, EventEmitter.prototype, {
    addFollowChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeFollowChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    all: function(){
      return _followers;
    },

    dispatcherId: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case UserConstants.FOUND_FOLLOWERS:
          resetFollowers(payload.followers);
          FollowersStore.emit(CHANGE_EVENT);
          break;
        case UserConstants.FOLLOWEE_ID_RECEIVED:
          handleSingleFollowerUpdate(payload.followee_id);
          FollowersStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
