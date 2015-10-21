var ApiUtil = {
  fetchInBounds: function(bounds){
    $.ajax({
      url: 'api/activities',
      type: 'GET',
      data: bounds,
      dataType: 'json',
      success: function(activities) {
        ApiActions.receiveInBounds(activities);
      },
      error: function(error) {
        console.log(error);
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
        ApiActions.receiveSingleActivity(activity);
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

  handleNewActivity: function(activity){
    $.ajax({
      url: 'api/activities',
      type: 'POST',
      data: activity,
      success: function() {
        location.reload(true);
      }
    });
  },

  editActivity: function(edited_activity) {
    $.ajax({
      url: 'api/activities/' + edited_activity.id,
      type: 'PATCH',
      data: edited_activity,
      success: function() {
        location.reload(true);
      }
    });
  },

  findUsers: function(fragment) {
    $.ajax({
      url: 'users',
      type: 'GET',
      data: {user: {search_fragment: fragment}},
      success: function(found_users) {
        UserActions.receiveFoundUsers(found_users);
      },
      error: function(error) {
        console.log(error);
      }
    });
  },

  createFollow: function(followee_id){
    $.ajax({
      url: 'users/' + window.CURRENT_USER_ID + '/follow/',
      type: 'POST',
      data: {follow: {followee_id: followee_id}},
      success: function(followee_id){
        UserActions.receiveFolloweeId(followee_id);
      }
    });
  },

  deleteFollow: function(followee_id){
    $.ajax({
      url: 'users/' + window.CURRENT_USER_ID + '/follow/',
      type: 'DELETE',
      data: {follow: {followee_id: followee_id}},
      success: function(followee_id){
        UserActions.receiveFolloweeId(followee_id);
      }
    });
  }
};
