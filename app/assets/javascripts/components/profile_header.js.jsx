var ProfileHeader = React.createClass({
  render: function(){
    return (
      <div className="card hovercard">
        <div className="card-background">
          <img className="card-bkimg"
               alt=""
               src="http://i.huffpost.com/gen/1730217/images/n-SURFING-WORKOUT-large570.jpg" />
        </div>
        <div className="useravatar">
          <img alt=""
               src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTWDbr8ORhk0NtbHp1sBm3KrlZSrCFQcWXG66CvqRD11e-oSroPVA" />
        </div>
        <div className="card-info">
          <span className="card-title">Persons Name</span>
        </div>
      </div>
    )
  }
});
