var Navbar = React.createClass({

  handleLogOut: function() {
    ApiUtil.logOut();
  },

  render: function() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="container-fluid">

            <ul className="nav nav-pills">
              <li><a href="#">Map</a></li>
              <li><a href="#">Profile</a></li>
            </ul>
          </div>

          <div className="nav navbar-nav navbar-right">
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
