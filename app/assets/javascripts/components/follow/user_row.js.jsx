var UserRow = React.createClass({
  getInitialState:function(){
    return {following: this.props.user.followee, followee_id: this.props.user.id};
  },

  render: function(){
    return (
      <tr className="search-result container-fluid profile-row">
        <td>{this.props.user.display_name}</td>
        <td><FollowButton user={this.props.user} /></td>
      </tr>
    )
  }
});
