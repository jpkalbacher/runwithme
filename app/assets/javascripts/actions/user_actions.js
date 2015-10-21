
var UserActions = {
  receiveFoundUsers: function(found_users) {
    AppDispatcher.dispatch({
      actionType: UserConstants.FOUND_USERS_RECEIVED,
      found_users: found_users
    });
  },

  receiveFolloweeId: function(followee_id){
    AppDispatcher.dispatch({
      actionType: UserConstants.FOLLOWEE_ID_RECEIVED,
      followee_id: followee_id
    });
  }
};
