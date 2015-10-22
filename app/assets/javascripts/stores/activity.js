(function(root){
  var CHANGE_EVENT = "change";

  var _activities = [];
  var _filtered_activities = [];
  var _current_filters = [];
  var _single_activity = {};

  var resetActivities = function(activities){
    _activities = activities;
  };

  var resetSingleActivity = function(singleActivity){
    _single_activity = singleActivity;
  };

  var resetFilters = function(filters){
    _current_filters = filters;
  };

  var resetFilteredActivities = function(filters){
    filtered_activities = [];
    for(var i = 0; i < _activities.length; i++){
      for(var j = 0; i < filters.length; i++) {
        if(_activities[i].owner == filters[j]){
          filtered_activities.push(_activities[i]);
        }
      }
    }
    _filtered_activities = filtered_activities;
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
      filtered_activities = [];
      for(var i = 0; i < _activities.length; i++){
        for(var j = 0; j < _current_filters.length; j++) {
          if(_activities[i].owner == _current_filters[j]){
            filtered_activities.push(_activities[i]);
          }
        }
      }
      return filtered_activities;
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
        case ActivityConstants.CHANGE_FILTERS:
          resetFilters(payload.filters);
          ActivityStore.emit(CHANGE_EVENT);
          break;
        }
    })
  });
})(this);
