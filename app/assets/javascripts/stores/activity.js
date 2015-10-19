(function(root){
  var CHANGE_EVENT = "change";

  var _activities = [];

  var resetActivities = function(activities){
    _activities = activities;
  };

  root.ActivityStore = $.extend({}, EventEmitter.prototype, {
    addMapChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeMapChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    all: function(){
      if (_activities.length > 0) {
        return _activities.slice(0);
      } else {
        return [];
        }
    },

    find: function(id){
      var a = {};
      _activities.forEach(function(activity){
        if(activity.id == id) {
          a = activity;
        }
      });
      return a;
    },

    dispatcherID: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case ActivityConstants.ACTIVITIES_RECEIVED:
          resetActivities(payload.activities);
          ActivityStore.emit(CHANGE_EVENT);
          break;
        }
    })
  });
})(this);
