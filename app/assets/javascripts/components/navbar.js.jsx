var Navbar = React.createClass({
  handleLogOut: function() {
    ApiUtil.logOut();
  },

  render: function() {
    return (
      <nav className="navbar-default navbar-fixed-top">
          <ul className="nav navbar-nav">
            <li className="nav navbar-title">GetOutside</li>
            <li className="dropdown sign-out">
              <button className="btn btn-lg dropdown-toggle"
                      type="button"
                      id="dropdownMenu1"
                      data-toggle="dropdown"
                      aria-haspopup="true">
                <span className="glyphicon glyphicon-menu-hamburger"
                      aria-hidden="true">
                </span>
              </button>
              <ul className="dropdown-menu pull-right" aria-labelledby="dropdownMenu1">
                <li><a href="/#/main/new">New Activity</a></li>
                <li><a href="/#/main/profile">Edit Profile</a></li>
                <li><a href="#" onClick={this.handleLogOut}>Sign Out</a></li>
              </ul>
            </li>
          </ul>
      </nav>
    )
  }
})
