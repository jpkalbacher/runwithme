var FollowingTable = React.createClass({
  getInitialState: function(){
    ApiUtil.findFollowing();
    return {following: FollowingStore.all()};
  },

  componentDidMount: function(){
    FollowingStore.addFollowingChangeListener(this._onChange);
    ApiUtil.findFollowing();
  },

  componentWillUnmount: function(){
    FollowingStore.removeFollowingChangeListener(this._onChange);
  },

  _onChange: function(){
    this.setState({following: FollowingStore.all()});
  },


  render: function() {
    var rows = [];
    this.state.following.forEach(function(following){
      rows.push(<UserRow user={following} key={following.id} />);
    });
    return (
      <table className="table table-striped">
        <tbody>{rows}</tbody>
      </table>
    );
  }
});
