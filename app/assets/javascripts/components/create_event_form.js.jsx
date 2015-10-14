

var CreateEventForm = React.createClass({
  getInitialState: function () {
    return { event_type:"", location_description:"",
    latitude:"", start_time:"", longitude:"" };
  },

  updateDescription: function(e){
    e.preventDefault();
    this.setState({event_type:event.target.value});
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

  handleNewEvent: function(e){
    e.preventDefault();
    ApiUtil.handleNewEvent({new_event: this.state});
  },

  render: function(){
    return (
      <div className= "container-fluid row">
        <div className="form-group form-inline form-control form-box">
          <h3>Create an Event!</h3>
          <form onSubmit={this.handleNewEvent}>
            <label>Description</label>
            <input type="text" onChange={this.updateDescription}/>
            <br/>
            <label>Start</label>
            < Datetime onChange={this.updateStartTime}/>
            <br/>
            <label>Location Name</label>
            <input type="text"
                   onChange={this.updateLocationDescription}/>
            <br/>
            <label>Latitude</label>
            <input type="number" step="0.0000001" onChange={this.updateLatitude}/>
            <br/>
            <label>Longitude</label>
            <input type="number" step="0.00000001" onChange={this.updateLongitude}/>
            <br/>
            <input type="submit"/>
          </form>
          <button>Cancel</button>
        </div>
      </div>
    );
  }
})
