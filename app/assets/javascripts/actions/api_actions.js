
var ApiActions = {
  receiveInBounds: function(activities) {
    AppDispatcher.dispatch({
      actionType: ActivityConstants.ACTIVITIES_RECEIVED,
      activities: activities
    });
  }
};
