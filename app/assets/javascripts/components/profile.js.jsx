var Profile = React.createClass({
  getInitialState: function(){
    return {currentUser: CurrentUserStore.currentUser()};
  },

  componentDidMount: function(){
    CurrentUserStore.addCurrentUserChangeListener(this._onChange);
    ApiUtil.getCurrentUser();
  },

  componentWillUnmount: function(){
    CurrentUserStore.removeCurrentUserChangeListener(this._onChange);
  },

  _onChange: function(){
    this.setState({currentUser: CurrentUserStore.currentUser()});
  },

  render: function() {
    return (
      <div className="col-lg-6 col-sm-6 profile">
        <ProfileNav />
        <FollowContainer />
      </div>
    )
  }
})
