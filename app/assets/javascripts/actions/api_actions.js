window.ApiActions = {
  receiveInBounds: function(activities) {
    AppDispatcher.dispatch({
      actionType: ActivityConstants.ACTIVITIES_RECEIVED,
      activities: activities
    });
  },

  receiveMyActivities: function(activities) {
    AppDispatcher.dispatch({
      actionType: ActivityConstants.MY_ACTIVITIES_RECEIVED,
      activities: activities
    });
  },

  receiveSingleActivity: function(activity) {
    AppDispatcher.dispatch({
      actionType: ActivityConstants.SINGLE_ACTIVITY_RECEIVED,
      activity: activity
    });
  },

  changeFilters: function(filters){
    AppDispatcher.dispatch({
      actionType: ActivityConstants.CHANGE_FILTERS,
      filters: filters
    });
  }
};
