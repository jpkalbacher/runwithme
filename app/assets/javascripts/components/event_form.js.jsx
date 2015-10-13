EventForm = React.createClass({
  render: function(){
    return (
        <div>
          <h3>Create an Event!</h3>
          <form>
            <label>Description</label>
            <input type="text"/>
            <br/>
            <label>Start</label>
            <input min='0' type="number" valueLink={this.linkState('seating')}/>
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
