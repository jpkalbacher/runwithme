
var ApiActions = {
  receiveEvents: function(events) {
    AppDispatcher.dispatch({
      actionType: EventConstants.RECEIVE_EVENTS,
      events: events
    });
  }
};
