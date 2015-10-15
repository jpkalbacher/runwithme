var EditActivityForm = React.createClass({

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
