

var CreateActivityForm = React.createClass({
  getInitialState: function () {
    return { activity_type:"", location_description:"",
    latitude:"", start_time:"", longitude:"" };
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

  handleNewActivity: function(e){
    e.preventDefault();
    ApiUtil.handleNewActivity({activity: this.state});
  },

  render: function(){
    return (
      <div className="show-activity container-fluid">
        <div className="panel panel-default panel-body">
          <h3>Create an Activity!</h3>
          <form onSubmit={this.handleNewActivity}>
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
            <input type="submit"/>
          </form>
          <button>Cancel</button>
        </div>
      </div>
    );
  }
})
