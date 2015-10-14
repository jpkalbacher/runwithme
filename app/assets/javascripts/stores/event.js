(function(root){
  var _events = [];

  var CHANGE_EVENT = "change";

  var resetEvents = function(events){
    _events = events;
  };

  root.EventStore = $.extend({}, EventEmitter.prototype, {
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
      return _events.slice(0);
    },

    dispatcherID: AppDispatcher.register(function(payload){
      if(payload.actionType === EventConstants.EVENTS_RECEIVED){
        resetEvents(payload.events);
        EventStore.emit(CHANGE_EVENT);
      }
    })


  });

})(this);
