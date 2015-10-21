var FollowersTable = React.createClass({
  getInitialState: function(){
    ApiUtil.findFollowers();
    return {followers: FollowersStore.all()};
  },

  componentDidMount: function(){
    FollowersStore.addFollowChangeListener(this._onChange);
    ApiUtil.findFollowers();
  },

  componentWillUnmount: function(){
    FollowersStore.removeFollowChangeListener(this._onChange);
  },

  _onChange: function(){
    this.setState({followers: FollowersStore.all()});
  },

  render: function() {
    var rows = [];
    this.state.followers.forEach(function(follower){
      rows.push(<UserRow user={follower} key={follower.id} />);
    });
    return (
      <table className="table table-striped">
        <tbody>{rows}</tbody>
      </table>
    );
  }
});
