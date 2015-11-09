var ShowActivity = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function () {
    ApiUtil.fetchSingleActivity(this.props.params.activityId);
    return {activity: CurrentActivityStore.current()};
  },

  componentDidMount: function () {
    ApiUtil.fetchSingleActivity(this.props.params.activityId);
    CurrentActivityStore.addSingleChangeListener(this._activityChanged);
    FollowingStore.addFollowingChangeListener(this._activityChanged);
  },

  componentWillUnmount: function() {
    CurrentActivityStore.removeSingleChangeListener(this._activityChanged);
    FollowingStore.removeFollowingChangeListener(this._activityChanged);
  },

  exitShowView: function(){
    this.props.history.pushState(null, "/main/");
  },

  _activityChanged: function () {
    var activity = CurrentActivityStore.current();
    this.setState({following: FollowingStore.all()});
    this.setState({ activity: activity });
  },

  _handleAttend: function (e){
    var activity = this.props.params.activityId;
    e.preventDefault();
    ApiUtil.handleAttend(activity);
  },

  render: function() {
    var rows = [];
    if(this.state.activity.attendees){
      this.state.activity.attendees.forEach(function(attendee){
        rows.push(<UserRow user={attendee} key={attendee.id} />);
      });
      var header = (
          <h1> Other {this.state.activity.activity_type}s </h1>
      )
    };
    var images = {
      "Surfing": "http://res.cloudinary.com/dbw79utiw/image/upload/v1447038364/surf6_dvujuk.png",
      "Swimming": "http://res.cloudinary.com/dbw79utiw/image/upload/v1447038365/stick-man1_dleukg.png",
      "Running": "http://res.cloudinary.com/dbw79utiw/image/upload/v1447038363/sprint_vbmf0l.png",
      "Skiing": "http://res.cloudinary.com/dbw79utiw/image/upload/v1447038363/ski9_hhlqrr.png",
      "Hiking": "http://res.cloudinary.com/dbw79utiw/image/upload/v1447038363/hiking3_askemn.png",
      "Cycling": "http://res.cloudinary.com/dbw79utiw/image/upload/v1447038363/cycling_rxdmte.png",
      "Climbing": "http://res.cloudinary.com/dbw79utiw/image/upload/v1447038363/climb_wvbmj5.png"
    };
    if (this.state.activity.owner) {
      return (
        <div className="container activity-details">
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
            <div className="row">
              <div className="col-md-4 col-xs-12 map-user-photo">
                <img src={this.state.activity.owner.profile_photo_url} />
              </div>
              <div className="col-md-4 col-xs-12 activity-description">
                <h3>{this.state.activity.activity_type}</h3>
                <h4>{this.state.activity.start_time}</h4>
                <h4>{this.state.activity.location_description}</h4>
                <h4>{this.state.activity.description}</h4>
                < RSVP activity={this.state.activity}/>
              </div>
              <div className="col-md-4 col-xs-12 map-user-photo">
                <img src={images[this.state.activity.activity_type]} />
              </div>
            </div>
          </div>
          <div>
            {header}
          </div>
          <table className="table table-striped">
            <tbody>{rows}</tbody>
          </table>
        </div>
      )
    } else {
      return(
        <div></div>
      );
    }
  }
});
