var EditActivityForm = React.createClass({
  componentDidMount: function(){
    if (this.state.owner_id !== window.CURRENT_USER_ID){
      this.props.history.pushState(null, "main/");
    }
    this.setupAutoComplete();
    ActivityStore.addSingleChangeListener(this._onChange);
    ApiUtil.fetchSingleActivity(this.props.params.activityId);
  },

  componentWillUnmount: function() {
    ActivityStore.removeSingleChangeListener(this._onChange);
  },

  _onChange: function(){
    ActivityStore.current();
  },

  setupAutoComplete: function(){
    var input = (document.getElementById('pac-input'));
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.addListener('place_changed', this.getPlace.bind(this, autocomplete));
  },

  getPlace: function(autocomplete){
    var place = autocomplete.getPlace();

    var lat = place.geometry.location.lat();
    var lng = place.geometry.location.lng();
    var description = place.formatted_address.split(",")[0];

    this.setState({latitude:lat});
    this.setState({longitude:lng});
    this.setState({location_description: description});
  },

  getInitialState: function () {
    var activity = ActivityStore.find(this.props.params.activityId);
    return {
      id:activity.id,
      owner_id:activity.owner_id,
      activity_type:activity.activity_type,
      start_time:activity.start_time,
      location_description:activity.location_description,
      canceled:activity.canceled
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
      google_place: "",
      start_time:activity.start_time,
      owner_id:activity.owner_id,
      latitude:activity.latitude,
      longitude:activity.longitude,
      location_description:activity.location_description,
      canceled:activity.canceled
    });
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

  autocomplete: function(e){
    if (e.keyCode == 13) {
      e.preventDefault();
    }
  },

  handleCancel: function(e){
    e.preventDefault();
    this.state.canceled = true;
    var activity = {activity: this.state};
    ApiUtil.editActivity(activity);
    this.setState({canceled:true});
  },

  handleEditActivity: function(event){
    event.preventDefault();
    var activity = {activity: this.state};
    ApiUtil.editActivity(activity);
  },

  exitEditView: function(){
    this.props.history.pushState(null, "/main/");
  },

  render: function(){
    return (
        <div className= "row">
          <div className="display-box panel panel-default panel-body">
            <div className="clearfix box-top">
              <button type="button"
                    onClick={this.exitEditView}
                    className="btn btn-default remove"
                    aria-label="Right Align">
                    <span className="glyphicon glyphicon-remove"
                          aria-hidden="true">
                    </span>
              </button>
            </div>
            <h3>Edit Activity</h3>
            <form className="edit-activity-form">
              <div className="activity-form">
                <input className="form-control"
                       type="text"
                       onChange={this.updateDescription}
                       value={this.state.activity_type} />
              </div>
              <div className="activity-form" >
                <input className="form-control"
                       type="text"
                       onChange={this.updateLocationDescription}
                       onKeyDown={this.autocomplete}
                       value={this.state.location_description}
                       id="pac-input"/>
              </div>
              <div className="activity-form">
                < Datetime onChange={this.updateStartTime}
                           value={this.state.start_time}/>
              </div>
            </form>
            <button className="btn btn-default btn-lg edit-button"
                    onClick={this.handleEditActivity}>
                    Edit Activity
            </button>
            <button className="btn btn-default btn-lg edit-button"
                    onClick={this.handleCancel}>
                    Cancel Activity
            </button>
          </div>
        </div>
    );
  }
})
