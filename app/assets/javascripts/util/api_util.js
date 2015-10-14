var ApiUtil = {
  fetchInBounds: function(bounds){
    $.ajax({
      url: 'api/events',
      type: 'GET',
      data: bounds,
      dataType: 'json',
      success: function(in_bounds) {
        ApiActions.receiveInBounds(in_bounds);
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

  handleNewEvent: function(new_event){
    $.ajax({
      url: 'api/events',
      type: 'POST',
      data: new_event,
      success: function() {
        location.reload(true);
      }
    });
  }
};
