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

      var nwLat = bounds.Pa.j;
      var nwLng = bounds.La.j;
      var seLat = bounds.Pa.I;
      var seLng = bounds.La.I;

      bounds = { bounds: {
          northWest: {lat: nwLat, lng: nwLng},
          southEast: {lat: seLat, lng: seLng}
        }
      };
      ApiUtil.fetchInBounds(bounds);
    });
  },

	componentDidUpdate: function(oldProps){
		this._onChange();
	},

	_onChange: function() {
		var activities = this.props.activities;
		var toAdd = [], toRemove = this.markers.slice(0);

		activities.forEach(function(activity, idx){
			var idx = -1;

			for(var i = 0; i < toRemove.length; i++){
				if(toRemove[i].activityId == activity.id){
					idx = i;
					break;
				}
			}
			if(idx=== -1){
				toAdd.push(activity);
			} else {
				toRemove.splice(idx, 1);
			}
		});
		toAdd.forEach(this.addMarker);
		toRemove.forEach(this.removeMarker);
  },

	addMarker: function(activity){
		var that = this;
		var pos = new google.maps.LatLng(activity.latitude, activity.longitude);
		var marker = new google.maps.Marker({
			position: pos,
			map: this.map,
			activityId: activity.id
		});
		marker.addListener('click', function(){
			that.props.onMarkerClick(activity);
		});
		this.markers.push(marker);
	},

	removeMarker: function(marker){
		for(var i = 0; i < this.markers.length; i++){
			if (this.markers[i].activityId === marker.activityId){
				this.markers[i].setMap(null);
				this.markers.splice(i, 1);
				break;
			}
		}
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
