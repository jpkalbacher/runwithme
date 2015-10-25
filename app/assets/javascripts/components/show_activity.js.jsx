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

  buildURLs:function(){
    that = this;
    if (this.state.activity["owner_picture_url"]){
      var profilePhotoObject = this.state.activity["owner_picture_url"];
      if (profilePhotoObject["coordinates"]){
        var profileCoords = profilePhotoObject["coordinates"]["custom"][0];
        var profilePhotoURL = "https://res.cloudinary.com/dbw79utiw/image/upload/x_" +
          profileCoords[0] + ",y_" + profileCoords[1] + ",w_" +
          profileCoords[2] +  ",h_" + profileCoords[2] + ",c_crop/" +
          profilePhotoObject.path;
      } else {
        profilePhotoURL = profilePhotoObject["secure_url"];
      }
      that.setState({profilePhotoURL:profilePhotoURL});
    }
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
    this.buildURLs();
  },

  render: function() {
    if (this.state.activity) {
      return (
        <div className="row">
          <div className="display-box panel panel-default panel-body">
            <div className="map-user-photo">
              <img src={this.state.profilePhotoURL} />
            </div>
            <h3>{this.state.activity.activity_type}</h3>
            <h3>{this.state.activity.owner_name}</h3>
            <h3>{this.state.activity.location_description}</h3>
            <h3>{this.state.activity.start_time}</h3>
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
