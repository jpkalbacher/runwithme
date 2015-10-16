var EditActivityForm = React.createClass({
  getInitialState: function () {
    var activity = ActivityStore.find(this.props.params.activityId);
    debugger;
    return {
      activity_type:activity.activity_type,
      start_time:activity.start_time,
      owner_id:activity.owner_id,
      latitude:activity.latitude,
      longitude:activity.longitude,
      location_description:activity.location_description
    };
  },

  _findActivityById: function (id) {
    var res;
    ActivityStore.all().forEach(function (activity) {
      if (id == activity.id) {
        res = activity;
      }
    }.bind(this));
    ApiUtil.fetchSingleActivity(this.props.params.activityId);
    return res;
  },

  componentWillReceiveProps: function() {
    ApiUtil.fetchSingleActivity(this.props.params.activityId);
    var activity = ActivityStore.singleActivity();
    this.setState({activity: activity});
  },

  handleEditActivity: function(event){
    event.preventDefault();
    ApiUtil.editActivity(this.state.activity);
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
        <div className= "container-fluid row">
          <div className="form-group form-inline form-control form-box">
            <h3>Edit Activity!</h3>
            <form onSubmit={this.handleEditActivity}>
              <div className="form-group">
                <label>Description</label>
                <input type="text" onChange={this.updateDescription}/>
              </div>
              <div className="form-group">
                <label>Location Name</label>
                <input type="text"
                       onChange={this.updateLocationDescription}/>
              </div>
              <div className="form-group">
                <label>Latitude</label>
                <input type="number" step="0.0000001" onChange={this.updateLatitude}/>
              </div>
              <div className="form-group">
                <label>Longitude</label>
                <input type="number" step="0.00000001" onChange={this.updateLongitude}/>
              </div>
              <div className="form-group">
                <label>Start</label>
                < Datetime onChange={this.updateStartTime}/>
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
