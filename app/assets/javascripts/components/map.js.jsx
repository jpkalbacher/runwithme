window.Map = React.createClass({
	_onChange: function() {
		var events = EventStore.all();

		events.forEach(function(event){

			if ($.inArray(event.id, this.markers) === -1) {
				var marker = new google.maps.Marker({
					map: this.map,
					draggable: true,
					position: {lat: event.latitude, lng: event.longitude},
					animation: google.maps.Animation.DROP,
				});

				marker.eventId = event.id;
				this.markers.push(event.id);
			}
		}.bind(this));
  },

  componentDidMount: function(){
    this.markers = [];

    var map = React.findDOMNode(this.refs.map);

    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };

    this.map = new google.maps.Map(map, mapOptions);

    EventStore.addMapChangeListener(this._onChange);

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
    });
  },

  render: function() {
		return (
      <div>
			   <div className="map" ref="map" />
         < CreateButton />
      </div>
		)
	}
});
