var FollowButton = React.createClass({
  getInitialState:function(){
    return {following: this.props.user.followee,
            followee_id: this.props.user.id};
  },

  handleFollow: function(){
    this.state.following = !this.state.following;
    if (this.state.following === true){
      ApiUtil.createFollow(this.state.followee_id);
    } else {
      ApiUtil.deleteFollow(this.state.followee_id);
    }
  },

  render: function(){
    var text = this.state.following ? 'Unfollow' : 'Follow';
    return (
      <div>
        <button onClick={this.handleFollow}>{text}</button>
      </div>
    )
  }
});
