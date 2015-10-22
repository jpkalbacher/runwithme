var Navbar = React.createClass({

  handleLogOut: function() {
    ApiUtil.logOut();
  },

  render: function() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
          <ul className="nav nav-pills list sign-in">
            <li><a href="#/main">Map</a></li>
            <li><a href="#/profile">Profile</a></li>
          </ul>
          <ul className="nav nav-pills list navbar-right sign-out">
            <li><a onClick={this.handleLogOut}
                    href="#/main">Sign Out</a></li>
          </ul>
      </nav>
    )
  }
})
