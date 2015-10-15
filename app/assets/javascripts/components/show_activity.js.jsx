var ShowActivity = React.createClass({
  getInitialState: function () {
    return { activity: this._findActivityById(this.props.params.activityId) };
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
    ApiUtil.fetchSingleActivity(this.props.params.activityId);
  },

  componentWillReceiveProps: function (nextProps) {
    this.setState({
      activity: this._findActivityById(nextProps.params.activityId)
    });
  },

  componentWillUnmount: function(){
    ActivityStore.removeChangeListener(this._activityChanged);
  },

  _activityChanged: function () {
    var activityId = this.props.params.activityId;
    var activity = this._findActivityById(activityId);
    this.setState({ activity: activity });
  },

  render: function() {
    if (this.state.activity) {
      return (
        <div className="container-fluid row show-activity">
          <div className="panel panel-default">
            <div className="panel-body">
              <h3>Activity: {this.state.activity.activity_type}</h3>
              <h3>Owner: {this.state.activity.owner_id}</h3>
              <h3>Location: {this.state.activity.location_description}</h3>
              <h3>Start: {this.state.activity.start_time}</h3>
            </div>
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
