
var UserActions = {
  receiveFoundUsers: function(found_users) {
    AppDispatcher.dispatch({
      actionType: UserConstants.FOUND_USERS_RECEIVED,
      found_users: found_users
    });
  },
};
