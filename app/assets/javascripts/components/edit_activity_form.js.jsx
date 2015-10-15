var EditActivityForm = React.createClass({
  render: function(){
    return (
        <div className= "container-fluid row">
          <div className="form-group form-inline form-control form-box">
            <h3>Edit Activity!</h3>
            <form>
              <label>Description</label>
              <input type="text"/>
              <br/>
              <label>Start</label>
              <input type="datetime"/>
              <br/>
              <label>Location Name</label>
              <input type="text"/>
              <br/>
              <label>Latitude</label>
              <input type="text"/>
              <br/>
              <label>Longitude</label>
              <input type="text"/>
              <br/>
              <input type="submit" value="Edit Activity"/>
            </form>
            <button>Cancel</button>
          </div>
        </div>
    );
  }
})
