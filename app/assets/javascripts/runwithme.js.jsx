/* global React, ReactRouter*/
$(function (){
  var rootEl = document.getElementById('content');
  var Route = ReactRouter.Route;
  var Router = ReactRouter.Router;
  var IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass({
    render: function(){
      return (
        <div className="app clearfix container">
          < Navbar />
          {this.props.children}
          <div className="footer">
            <div className="container">
            </div>
          </div>
        </div>
      )
    }
  });

  var routes = (
    <Route path="/" component={App}>
      <IndexRoute component={Main} />
      <Route path="main" component={Main}>
        <Route path="new" component={CreateActivityForm} />
        <Route path="/main/profile" component={EditProfile} />
        <Route path=":activityId/edit" component={EditActivityForm} />
        <Route path="/main/:activityId" component={ShowActivity} />
      </Route>
    </Route>
  );

  React.render(<Router>{routes}</Router>, rootEl);
});
