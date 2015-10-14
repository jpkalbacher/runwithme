var ApiUtil = {
  fetchEvents: function(){
    $.ajax({
      url: 'api/events',
      type: 'GET',
      dataType: 'json',
      success: function(events) {
        ApiActions.receiveEvents(events);
      }
    });
  },

  logOut: function(){
    $.ajax({
      url: '/session',
      type: 'DELETE',
      success: function() {
        window.location = "/";
      }
    });
  },

  handleNewEvent: function(){
    $.ajax({
      url: 'api/events',
      type: 'POST',
      data: new_event,
      success: function() {
        window.location = "/";
      }
    });
  }
};
