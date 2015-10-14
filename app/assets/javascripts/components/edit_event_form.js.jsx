var EditEventForm = React.createClass({
  render: function(){
    return (
        <div>
          <h3>Edit Event!</h3>
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
            <input type="submit"/>
          </form>
          <button>Cancel</button>
        </div>
    );
  }
})
