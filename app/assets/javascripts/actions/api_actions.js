
var ApiActions = {
  receiveInBounds: function(activities) {
    AppDispatcher.dispatch({
      actionType: ActivityConstants.ACTIVITIES_RECEIVED,
      activities: activities
    });
  },

  receiveSingleActivity: function(activity) {
    AppDispatcher.dispatch({
      actionType: ActivityConstants.SINGLE_ACTIVITY_RECEIVED,
      activity: activity
    });
  }
};
