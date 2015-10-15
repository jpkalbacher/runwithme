var ShowActivity = React.createClass({
    getInitialState: function () {
    return { activity: _findActivityById(this.props.params.activityId) };
  },

  _findActivityById: function (id) {
    var res = {};
      ActivityStore.all().forEach(function (activity) {
        if (id == activity.id) {
          res = activity;
        }
    }.bind(this));
    return res;
  },

  componentDidMount: function () {
    ActivityStore.addChangeListener(this._activityChanged);
    ApiUtil.fetchSingleActivity(this.props.params.activitytId);
  },

  componentWillMount: function () {
    ApiUtil.fetchInBounds();
    ActivityStore.addChangeListener(this._activityChanged);
  },

  _activityChanged: function () {
    var activityId = this.props.params.activityId;
    var activity = this._findActivityById(activityId);
    this.setState({ activity: activity });
  },

  render: function() {
    return (
      <div>
        <h1>HELLO</h1>
        {this.props.location_description}
      </div>
    )
  }
});
