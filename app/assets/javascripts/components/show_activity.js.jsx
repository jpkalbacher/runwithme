var ShowActivity = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

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

  exitShowView: function(){
    this.props.history.pushState(null, "/main/");
  },

  componentDidMount: function () {
    ActivityStore.addChangeListener(this._activityChanged);
  },

  componentWillUnmount: function() {
    ActivityStore.removeChangeListener(this._activityChanged);
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
        <div className="row">
          <div className="display-box panel panel-default panel-body">
            <div className="clearfix box-top">
              <button type="button"
                    onClick={this.exitShowView}
                    className="btn btn-default remove"
                    aria-label="Right Align">
                    <span className="glyphicon glyphicon-remove"
                          aria-hidden="true">
                    </span>
              </button>
            </div>
            <div className="activity-description">
              <h3>{this.state.activity.activity_type}</h3>
              <h4>{this.state.activity.start_time}</h4>
              <h4>{this.state.activity.location_description}</h4>
            </div>
            <div className="description">
              <h5>{this.state.activity.description}</h5>
            </div>
            <div className="map-user-photo">
              <img src={this.state.activity.owner_picture_url} />
            </div>
            <div className="organizer-info">
              <h4>organizer: {this.state.activity.owner_name}</h4>
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
