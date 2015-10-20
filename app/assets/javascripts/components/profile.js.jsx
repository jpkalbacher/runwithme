var Profile = React.createClass({
  render: function() {
    return (
      <div className="col-lg-6 col-sm-6 profile">
        <ProfileHeader />
        <ProfileNav />
        <FollowContainer />
      </div>
    )
  }
})
