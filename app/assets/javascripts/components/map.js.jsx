window.Map = React.createClass({
	componentDidMount: function(){
    this.markers = [];

    var map = React.findDOMNode(this.refs.map);

    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };

    this.map = new google.maps.Map(map, mapOptions);

    ActivityStore.addMapChangeListener(this._onChange);

    this.map.addListener('idle', function() {
      var bounds = this.getBounds();

      var neLat = bounds.Pa.j;
      var neLng = bounds.La.j;
      var swLat = bounds.Pa.I;
      var swLng = bounds.La.I;

      bounds = { bounds: {
          northEast: {lat: neLat, lng: neLng},
          southWest: {lat: swLat, lng: swLng}
        }
      };

      ApiUtil.fetchInBounds(bounds);
			debugger;
    });
  },
	
	_onChange: function() {
		that = this;
		var activities = ActivityStore.all();

		activities.forEach(function(activity){

			if ($.inArray(activity.id, this.markers) === -1) {
				var marker = new google.maps.Marker({
					map: this.map,
					draggable: true,
					position: {lat: activity.latitude, lng: activity.longitude},
					animation: google.maps.Animation.DROP,
				});

				marker.addListener('click', function () {
        	that.props.onMarkerClick(activity);
      	});

				marker.activityId = activity.id;
				this.markers.push(activity.id);
			}
		}.bind(this));
  },



  render: function() {
		return (
      <div>
			   <div className="map"
				 			ref="map"/>
      </div>
		)
	}
});
