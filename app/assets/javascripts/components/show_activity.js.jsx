var ShowActivity = React.createClass({
  getInitialState: function () {
    return { activity: ActivityStore.find(this.props.params.activityId) };
  },

  _findActivityById: function (id) {
    var res;
    ActivityStore.all().forEach(function (activity) {
      if (id == activity.id) {
        res = activity;
      }
    }.bind(this));
    return res;
  },

  componentDidMount: function () {
    ActivityStore.addChangeListener(this._activityChanged);
  },

  componentWillReceiveProps: function (nextProps) {
    this.setState({
      activity: this._findActivityById(nextProps.params.activityId)
    });
  },

  _activityChanged: function () {
    var activityId = this.props.params.activityId;
    var activity = this._findActivityById(activityId);
    this.setState({ activity: activity });
  },

  render: function() {
    if (this.state.activity) {
      return (
        <div className="show-activity container-fluid row">
          <div className="panel panel-default panel-body">
            <h6>Activity: {this.state.activity.activity_type}</h6>
            <h6>Owner: {this.state.activity.owner_id}</h6>
            <h6>Location: {this.state.activity.location_description}</h6>
            <h6>Start: {this.state.activity.start_time}</h6>
          </div>
        </div>
      )
    } else {
      return(
        <div></div>
      );
    }
  }
});
