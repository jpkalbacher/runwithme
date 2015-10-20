var FilteredUsersTable = React.createClass({
  getInitialState: function(){
    return {foundUsers: UserSearchStore.all()};
  },

  componentDidMount: function(){
    UserSearchStore.addSearchChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    UserSearchStore.removeSearchChangeListener(this._onChange);
  },

  _onChange: function(){
    this.setState({foundUsers: UserSearchStore.all()});
  },

  render: function() {
    var rows = [];
    this.state.foundUsers.forEach(function(user){
      rows.push(<UserRow user={user} key={user.id} />);
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
});
