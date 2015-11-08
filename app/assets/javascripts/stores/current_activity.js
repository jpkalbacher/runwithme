(function(root){
  var CHANGE_EVENT = "change";
  var _single_activity = {};

  var resetSingleActivity = function(singleActivity){
    _single_activity = singleActivity;
  };

  root.CurrentActivityStore = $.extend({}, EventEmitter.prototype, {
    addSingleChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeSingleChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    current: function() {
      return _single_activity;
    },

    dispatcherID: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case ActivityConstants.SINGLE_ACTIVITY_RECEIVED:
          resetSingleActivity(payload.activity);
          CurrentActivityStore.emit(CHANGE_EVENT);
          break;
        }
    })
  });
})(this);
