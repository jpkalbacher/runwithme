var EditActivityForm = React.createClass({
  getInitialState: function () {
    var activity = ActivityStore.find(this.props.params.activityId);
    return {
      id:activity.id,
      activity_type:activity.activity_type,
      start_time:activity.start_time,
      owner_id:activity.owner_id,
      latitude:activity.latitude,
      longitude:activity.longitude,
      location_description:activity.location_description
    };
  },

  componentDidUpdate: function() {
    var activity = ActivityStore.find(this.props.params.activityId);
  },

  componentWillReceiveProps: function() {
    var activity = ActivityStore.find(this.props.params.activityId);
    this.setState({
      id:activity.id,
      activity_type:activity.activity_type,
      start_time:activity.start_time,
      owner_id:activity.owner_id,
      latitude:activity.latitude,
      longitude:activity.longitude,
      location_description:activity.location_description
    });
  },

  handleEditActivity: function(event){
    event.preventDefault();
    var activity = {activity: this.state};
    ApiUtil.editActivity(activity);
  },

  updateDescription: function(e){
    e.preventDefault();
    this.setState({activity_type:event.target.value});
  },

  updateStartTime: function(e){
    var date = e.toDate();
    this.setState({start_time:date});
  },

  updateLocationDescription: function(e){
    e.preventDefault();
    this.setState({location_description:event.target.value});
  },

  updateLatitude: function(e){
    e.preventDefault();
    this.setState({latitude:event.target.value});
  },

  updateLongitude: function(e){
    e.preventDefault();
    this.setState({longitude:event.target.value});
  },

  render: function(){
    return (
        <div className= "container-fluid row show-activity">
          <div className="form-group form-inline form-control form-box">
            <h3>Edit Activity!</h3>
            <form onSubmit={this.handleEditActivity}>
              <div className="form-group">
                <label>Description</label>
                <input type="text"
                       onChange={this.updateDescription}
                       value={this.state.activity_type}/>
              </div>
              <div className="form-group" >
                <label>Location Name</label>
                <input type="text"
                       onChange={this.updateLocationDescription}
                       value={this.state.location_description}/>
              </div>
              <div className="form-group" >
                <label>Latitude</label>
                <input type="number"
                       step="0.0000001"
                       onChange={this.updateLatitude}
                       value={this.state.latitude}/>
              </div>
              <div className="form-group" >
                <label>Longitude</label>
                <input type="number"
                       step="0.00000001"
                       onChange={this.updateLongitude}
                       value={this.state.longitude}/>
              </div>
              <div className="form-group" >
                <label>Start</label>
                < Datetime onChange={this.updateStartTime}
                           value={this.state.start_time}/>
              </div>
              <input type="submit"
                     value="Edit Activity"/>
            </form>
            <button>Cancel</button>
          </div>
        </div>
    );
  }
})
