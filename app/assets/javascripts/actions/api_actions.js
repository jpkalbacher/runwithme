
var ApiActions = {
  receiveInBounds: function(in_bounds) {
    AppDispatcher.dispatch({
      actionType: ActivityConstants.ACTIVITIES_RECEIVED,
      activities: in_bounds
    });
  }
};
