
var UserActions = {
  receiveFoundUsers: function(found_users) {
    AppDispatcher.dispatch({
      actionType: UserConstants.FOUND_USERS_RECEIVED,
      found_users: found_users
    });
  },

  receiveFollowers: function(followers) {
    AppDispatcher.dispatch({
      actionType: UserConstants.FOUND_FOLLOWERS,
      followers: followers
    });
  },

  receiveFollowing: function(following) {
    AppDispatcher.dispatch({
      actionType: UserConstants.FOUND_FOLLOWING,
      following: following
    });
  },

  receiveUser: function(user){
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user: user
    });
  },

  receiveCurrentUser: function(user){
    AppDispatcher.dispatch({
      actionType: UserConstants.CURRENT_USER_RECEIVED,
      currentUser: user
    });
  }
};
