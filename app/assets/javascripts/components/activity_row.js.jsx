var ActivityRow = React.createClass({
  render: function(){
    var images = {
      "Surfing": "http://res.cloudinary.com/dbw79utiw/image/upload/v1447038364/surf6_dvujuk.png",
      "Swimming": "http://res.cloudinary.com/dbw79utiw/image/upload/v1447038365/stick-man1_dleukg.png",
      "Running": "http://res.cloudinary.com/dbw79utiw/image/upload/v1447038363/sprint_vbmf0l.png",
      "Skiing": "http://res.cloudinary.com/dbw79utiw/image/upload/v1447038363/ski9_hhlqrr.png",
      "Hiking": "http://res.cloudinary.com/dbw79utiw/image/upload/v1447038363/hiking3_askemn.png",
      "Cycling": "http://res.cloudinary.com/dbw79utiw/image/upload/v1447038363/cycling_rxdmte.png",
      "Climbing": "http://res.cloudinary.com/dbw79utiw/image/upload/v1447038363/climb_wvbmj5.png"
    };

    return (
      <tr className="search-result container-fluid profile-row">
        <td><img src={images[this.props.activity.activity_type]} /></td>
        <td>{this.props.activity.activity_type}</td>
        <td>{this.props.activity.start_time}</td>
      </tr>
    )
  }
});
