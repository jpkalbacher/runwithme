var Navbar = React.createClass({

  handleLogOut: function() {
    ApiUtil.logOut();
  },

  render: function() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="container-fluid">
            <ul className="nav nav-pills list">
              <li><a href="#/main">Map</a></li>
              <li><a href="#/profile">Profile</a></li>
            </ul>

            <input
               type="button"
               onClick={this.handleLogOut}
               value="Sign Out"
               className="btn navbar-button navbar-right sign-out"/>
          </div>
        </div>
      </nav>
    )
  }
})
