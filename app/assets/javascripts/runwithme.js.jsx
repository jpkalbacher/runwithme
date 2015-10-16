/* global React, ReactRouter*/
$(function (){
  var rootEl = document.getElementById('content');
  var Route = ReactRouter.Route;
  var Router = ReactRouter.Router;
  var IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass({
    render: function(){
      return (
        <div>
          < Navbar />
          {this.props.children}
        </div>
      )
    }
  });

  var routes = (
    <Route path="/" component={App}>
      <Route path="main" component={Main}>
        <Route path="activities" component={Activities}>
          <Route path="new" component={CreateActivityForm} />
          <Route path=":activityId/edit" component={EditActivityForm} />
          <Route path="/main/activities/:activityId" component={ShowActivity} />
        </Route>
      </Route>
    </Route>
  );

  React.render(<Router>{routes}</Router>, rootEl);
});
