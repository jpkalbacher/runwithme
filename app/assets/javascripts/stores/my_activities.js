(function(root){
  var CHANGE_EVENT = "change";

  var _myActivities = [];

  var resetActivities = function(activities){
    _myActivities = activities;
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
        }
    })
  });
})(this);
