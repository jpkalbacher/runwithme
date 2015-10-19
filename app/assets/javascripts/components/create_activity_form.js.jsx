var CreateActivityForm = React.createClass({

  // setUpAutoComplete: function(){
  //   var input = (document.getElementById('pac-input'));
  //
	// 	var autocomplete = new google.maps.places.Autocomplete(input);
  //   debugger;
	// 	autocomplete.addListener('place_changed', this.getPlace);
  // },
  //
  // getPlace: function(){
  //   var place = autocomplete.getPlace();
  //
  //   var lat = place.geometry.location.lat();
  //   var lng = place.geometry.location.lng();
  //
  //   updateLatitude(lat);
  //   updateLongitude(lng);
  //   debugger;
  //
  // },
  //
  componentDidMount: function(){
    var that = this;
    var input = (document.getElementById('pac-input'));

    var getPlace = function(){
      var place = autocomplete.getPlace();

      var lat = place.geometry.location.lat();
      var lng = place.geometry.location.lng();
      var description = place.formatted_address.split(",")[0];

      that.setState({latitude:lat});
      that.setState({longitude:lng});
      that.setState({location_description: description});
      debugger;
    };

    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.addListener('place_changed', getPlace);
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
    ApiUtil.handleNewActivity({activity: this.state});
  },

  render: function(){
    return (
      <div className="show-activity container-fluid">
        <div className="panel panel-default panel-body">
          <h3>Create an Activity!</h3>
          <form onSubmit={this.handleNewActivity}>
            <div className="form-group">
              <input type="text"
                     onChange={this.updateDescription}
                     placeholder="Activity"/>
            </div>
            <div className="form-group" >
              <input type="text"
                     placeholder="Where are you going?"
                     id="pac-input"/>
            </div>
            <div className="form-group">
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
