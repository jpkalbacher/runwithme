var ApiUtil = {
  fetchInBounds: function(bounds){
    $.ajax({
      url: 'api/activities',
      type: 'GET',
      data: bounds,
      dataType: 'json',
      success: function(activities) {
        ApiActions.receiveInBounds(activities);
      }
    });
  },

  fetchSingleActivity: function(id){
    $.ajax({
      url: 'api/activities/' + id,
      type: 'GET',
      data: id,
      dataType: 'json',
      success: function(activity) {
        ApiActions.receiveInBounds(activity);
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
