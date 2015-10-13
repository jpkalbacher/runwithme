var ApiUtil = {
    logOut: function(){
      $.ajax({
        url: '/session',
        type: 'DELETE',
        success: function() {
          window.location = "/";
        }
      });
    }
};
