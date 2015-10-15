(function(root){
  var _activities = [];

  var CHANGE_EVENT = "change";

  var resetActivities = function(activities){
    _activities = activities;
  };

  root.ActivityStore = $.extend({}, EventEmitter.prototype, {
    addMapChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeMapChangeListener: function(callback) {
      this.removeChangeListener(CHANGE_EVENT, callback);
    },


    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
      this.removeChangeListener(CHANGE_EVENT, callback);
    },

    all: function(){
      return _activities.slice(0);
    },

    dispatcherID: AppDispatcher.register(function(payload){
      if(payload.actionType === ActivityConstants.ACTIVITIES_RECEIVED){
        resetActivities(payload.activities);
        ActivityStore.emit(CHANGE_EVENT);
      }
    })
  });
})(this);
