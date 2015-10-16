(function(root){
  var CHANGE_EVENT = "change";

  var _activities = [];
  var _selected_activity = {};

  var resetSelectedActivity = function(activity) {
    _selected_activity = activity;
  };

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

    addSingleChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeSingleChangeListener:function(callback){
      this.removeChangeListener(CHANGE_EVENT, callback);
    },

    all: function(){
      if (_activities.length > 0) {
        return _activities.slice(0);
      } else {
        return [];
        }
    },

    singleActivity: function(){
      return _selected_activity;
    },

    dispatcherID: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case ActivityConstants.ACTIVITIES_RECEIVED:
          resetActivities(payload.activities);
          ActivityStore.emit(CHANGE_EVENT);
          break;
        case ActivityConstants.SINGLE_ACTIVITY_RECEIVED:
          resetSelectedActivity(payload.activity);
          ActivityStore.emit(CHANGE_EVENT);
          break;
        }
    })
  });
})(this);
