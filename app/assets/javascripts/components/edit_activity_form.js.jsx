var EditActivityForm = React.createClass({
  getInitialState: function () {
    var activity = CurrentActivityStore.current();
    return {
      id: activity.id,
      activity_type: activity.activity_type,
      location_description: activity.location_description,
      start_time: activity.start_time,
      description: activity.description,
      canceled: activity.canceled
    };
  },

  componentDidMount: function(){
    this.setupAutoComplete();
    CurrentActivityStore.addSingleChangeListener(this._onChange);
    ApiUtil.fetchSingleActivity(this.props.params.activityId);
  },

  componentWillUnmount: function() {
    CurrentActivityStore.removeSingleChangeListener(this._onChange);
  },

  _onChange: function(){
    console.log("this changed")
    var activity = CurrentActivityStore.current();
    this.setState({
      id: activity.id,
      activity_type: activity.activity_type,
      location_description: activity.location_description,
      start_time: activity.start_time,
      description: activity.description,
      canceled: activity.canceled
    });
  },

  setupAutoComplete: function(){
    var input = (document.getElementById('pac-input'));
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.addListener(
      'place_changed', this.getPlace.bind(this, autocomplete)
    );
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

  updateActivityType: function(e){
    e.preventDefault();
    this.setState({activity_type:event.target.value});
  },

  updateDescription: function(e){
    e.preventDefault();
    this.setState({description:event.target.value});
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
    var activity = this.state;
    ApiUtil.editActivity(activity);
    this.setState({canceled:true});
  },

  handleEditActivity: function(event){
    event.preventDefault();
    var activity = this.state;
    ApiUtil.editActivity(activity);
  },

  exitEditView: function(){
    this.props.history.pushState(null, "/main/");
  },

  render: function(){
    return (
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
              <select className="form-control"
                      onChange={this.updateActivityType}
                      value="Activity">
                  <option value="Activity">Activity</option>
                  <option value="Surfing">Surfing</option>
                  <option value="Running">Running</option>
                  <option value="Cycling">Cycling</option>
                  <option value="Climbing">Climbing</option>
                  <option value="Swimming">Swimming</option>
              </select>
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
            <div className="activity-form">
              <textarea className="form-control"
                        rows="4"
                        onChange={this.updateDescription}
                        value={this.state.description}>
              </textarea>
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
    );
  }
})
