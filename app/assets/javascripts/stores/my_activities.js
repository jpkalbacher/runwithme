(function(root){
  var CHANGE_EVENT = "change";

  var _myActivities = [];

  var resetActivities = function(activities){
    _myActivities = activities;
  };

  var addActivity = function(activity){
    _myActivities.push(activity);
  };

  root.MyActivitiesStore = $.extend({}, EventEmitter.prototype, {
    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    all: function(){
      return _myActivities;
    },

    dispatcherID: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case ActivityConstants.MY_ACTIVITIES_RECEIVED:
          resetActivities(payload.activities);
          MyActivitiesStore.emit(CHANGE_EVENT);
          break;
        case ActivityConstants.MY_NEW_ACTIVITY:
          addActivity(payload.activity);
          MyActivitiesStore.emit(CHANGE_EVENT);
          break;
        }
    })
  });
})(this);
