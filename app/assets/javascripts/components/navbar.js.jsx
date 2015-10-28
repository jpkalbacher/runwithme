var Navbar = React.createClass({
  handleLogOut: function() {
    ApiUtil.logOut();
  },

  render: function() {
    return (
      <nav className="navbar-nav navbar-default navbar-fixed-top">
          <ul className="nav navbar-nav">
            <li className="nav navbar-title">GetOutside</li>
            <li className="nav sign-out"><a onClick={this.handleLogOut}
                    href="#/main">Sign Out</a></li>
          </ul>
      </nav>
    )
  }
})
