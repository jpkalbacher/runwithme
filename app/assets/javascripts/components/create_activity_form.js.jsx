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

  exitCreateView: function(){
    this.props.history.pushState(null, "/main/");
  },

  render: function(){
    return (
      <div className="row">
        <div className="display-box panel panel-default panel-body">
          <div className="clearfix box-top">
            <button type="button"
                  onClick={this.exitCreateView}
                  className="btn btn-default remove"
                  aria-label="Right Align">
                  <span className="glyphicon glyphicon-remove"
                        aria-hidden="true">
                  </span>
            </button>
          </div>
          <h3>Create an Activity!</h3>
          <form className="create-activity-form">
            <div className="activity-form">
              <input className="form-control"
                     type="text"
                     onChange={this.updateDescription}
                     placeholder="Activity"/>
            </div>
            <div className="activity-form">
              <input className="form-control"
                     type="text"
                     onKeyDown={this.autocomplete}
                     placeholder="Where are you going?"
                     id="pac-input"/>
            </div>
            <div className="activity-form">
              < Datetime onChange={this.updateStartTime}/>
            </div>
          </form>
          <button className="submit-button btn btn-default btn-lg"
                  onClick={this.handleNewActivity}>
                  Create New Activity
          </button>
        </div>
      </div>
    );
  }
})
