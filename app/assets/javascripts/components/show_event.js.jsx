var ShowEvent = React.createClass({


  getInitialState: function () {
    var eventId = this.props.params.eventId;
    var this_event = this._findEventById(eventId) || {} ;
    return { this_event: this_event };
  },

  _findEventById: function (id) {
    var res;
      EventStore.all().forEach(function (event) {
        if (id == this_event.id) {
          res = this_event;
        }
    }.bind(this));
    return res;
  },

  componentDidMount: function () {
    EventStore.addChangeListener(this._eventChanged);
    ApiUtil.fetchInBounds();
  },

  _eventChanged: function () {
    var eventId = this.props.params.eventId;
    var this_event = this._findEventById(eventId);
    this.setState({ this_event: this_event });
  },

  render: function() {
    return (
      <div>
        <h1>HELLO</h1>
        {this.props.event_type}
        {this.props.location_description}
      </div>
    )
  }
});
