
var ApiActions = {
  receiveInBounds: function(in_bounds) {
    AppDispatcher.dispatch({
      actionType: EventConstants.EVENTS_RECEIVED,
      events: in_bounds
    });
  }
};
