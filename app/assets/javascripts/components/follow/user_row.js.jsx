var UserRow = React.createClass({
  getInitialState:function(){
    if(this.props.user.followee === true) {
      buttonName = "Unfollow";
    } else {
      buttonName = "Follow";
    }
    return {buttonName: buttonName};
  },


  render: function(){
    return (
      <tr className="search-result container-fluid profile-row">
        <td>{this.props.user.display_name}</td>
        <td><button>{this.state.buttonName}</button></td>
      </tr>
    )
  }
});
