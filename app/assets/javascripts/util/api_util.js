var ApiUtil = {
  fetchInBounds: function(bounds){
    $.ajax({
      url: 'api/activities',
      type: 'GET',
      data: bounds,
      dataType: 'json',
      success: function(in_bounds) {
        ApiActions.receiveInBounds(in_bounds);
      }
    });
  },

  fetchSingleActivity: function(id){
    $.ajax({
      url: 'api/activities',
      type: 'GET',
      data: id,
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

  handleNewActivity: function(new_activity){
    $.ajax({
      url: 'api/activities',
      type: 'POST',
      data: new_activity,
      success: function() {
        location.reload(true);
      }
    });
  }
};
