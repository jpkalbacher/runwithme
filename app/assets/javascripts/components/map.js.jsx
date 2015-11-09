window.Map = React.createClass({
	mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

	componentDidMount: function(){
    this.markers = [];

    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13,
			navigationControl: false,
			mapTypeId: google.maps.MapTypeId.TERRAIN,
			mapTypeControl: false,
			scrollwheel: false
    };
    this.map = new google.maps.Map(map, mapOptions);
    ActivityStore.addMapChangeListener(this._onChange);
    this.map.addListener('idle', function() {
      var bounds = this.getBounds();

      var neLat = bounds.getNorthEast().lat();
      var neLng = bounds.getNorthEast().lng();
      var swLat = bounds.getSouthWest().lat();
      var swLng = bounds.getSouthWest().lng();

      bounds = { bounds: {
          northEast: {lat: neLat, lng: neLng},
          southWest: {lat: swLat, lng: swLng}
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
			idx = -1;

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
		var markers = {
			"Skiing": "http://res.cloudinary.com/dbw79utiw/image/upload/v1447039368/ski9_oi7ytl.png",
			"Running": "http://res.cloudinary.com/dbw79utiw/image/upload/v1447039368/sprint_x6tpol.png",
			"Cycling": "http://res.cloudinary.com/dbw79utiw/image/upload/v1447039368/cycling_xmkkrz.png",
			"Surfing": "http://res.cloudinary.com/dbw79utiw/image/upload/v1447039368/surf6_oni7wc.png",
			"Climbing": "http://res.cloudinary.com/dbw79utiw/image/upload/v1447039368/climb_w7fdvj.png",
			"Swimming": "http://res.cloudinary.com/dbw79utiw/image/upload/v1447039368/stick-man1_v86nh6.png",
			"Hiking": "http://res.cloudinary.com/dbw79utiw/image/upload/v1447039368/hiking3_nqjhp3.png"
		};
		var pos = new google.maps.LatLng(activity.latitude, activity.longitude);
		var marker = new google.maps.Marker({
			position: pos,
			map: this.map,
			activityId: activity.id,
			icon: markers[activity.activity_type]
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
      <div className="map-view">
			   <div className="map"
				 			ref="map"/>
				 < Filters />
      </div>
		)
	}
});
