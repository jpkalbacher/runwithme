var ShowEvent = React.createClass({
    getInitialState: function () {
    return { event: _findEventById(this.props.params.eventId) };
  },

  _findEventById: function (id) {
    var res = {};
      EventStore.all().forEach(function (event) {
        if (id == event.id) {
          res = event;
        }
    }.bind(this));
    return res;
  },

  componentDidMount: function () {
    EventStore.addChangeListener(this._eventChanged);
    ApiUtil.fetchSingleEvent(this.props.params.eventId);
  },

  componentWillMount: function () {
    ApiUtil.fetchInBounds();
    EventStore.addChangeListener(this._eventChanged);
  },

  _eventChanged: function () {
    var eventId = this.props.params.eventId;
    var event = this._findEventById(eventId);
    this.setState({ event: event });
  },

  render: function() {
    debugger;
    return (
      <div>
        <h1>HELLO</h1>
        {this.state.event.whateverahdahad}
        {this.props.location_description}
      </div>
    )
  }
});
