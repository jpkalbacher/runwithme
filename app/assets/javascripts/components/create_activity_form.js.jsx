var CreateActivityForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin],


  componentDidMount: function(){
    this.setupAutoComplete();
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
    return { activity_type:"", location_description:"",
     start_time:"" };
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

  handleNewActivity: function(e){
    e.preventDefault();
    this.setState({canceled:false});
    ApiUtil.handleNewActivity({activity: this.state});
  },

  autocomplete: function(e){
    if (e.keyCode == 13) {
      e.preventDefault();
    }
  },

  cancelCreate: function(){
    this.props.history.pushState(null, "/main/");
  },

  render: function(){
    return (
      <div className=" container-fluid">
        <div className="show-activity panel panel-default panel-body">
          <h3>Create an Activity!</h3>
          <form onSubmit={this.handleNewActivity}>
            <div className="form-group">
              <input type="text"
                     onChange={this.updateDescription}
                     placeholder="Activity"/>
            </div>
            <div className="form-group" >
              <input type="text"
                     onKeyDown={this.autocomplete}
                     placeholder="Where are you going?"
                     id="pac-input"/>
            </div>
            <div className="form-group">
              < Datetime onChange={this.updateStartTime}/>
            </div>
            <input type="submit"/>
          </form>
          <button onClick={this.cancelCreate}>Cancel</button>
        </div>
      </div>
    );
  }
})
