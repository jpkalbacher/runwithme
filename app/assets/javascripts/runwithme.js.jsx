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
      <Route path="events" component={Events}>
        <Route path="new" component={CreateEventForm} />
        <Route path="edit/:eventId" component={EditEventForm} />
        </Route>
    </Route>
  );

  React.render(<Router>{routes}</Router>, rootEl);
});
