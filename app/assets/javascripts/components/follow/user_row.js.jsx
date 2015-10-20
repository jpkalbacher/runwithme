var UserRow = React.createClass({
  render: function(){
    return (
      <tr>
        <td>{this.props.user.display_name}</td>
      </tr>
    )
  }
});
