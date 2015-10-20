(function(root){
  var CHANGE_EVENT = "change";

  var _activities = [];
  var _single_activity = {};

  var resetActivities = function(activities){
    _activities = activities;
  };

  var resetSingleActivity = function(singleActivity){
    _single_activity = singleActivity;
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

    addSingleChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeSingleChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    current: function() {
      return _single_activity;
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
        case ActivityConstants.SINGLE_ACTIVITY_RECEIVED:
          resetSingleActivity(payload.activity);
          ActivityStore.emit(CHANGE_EVENT);
          break;
        }
    })
  });
})(this);
