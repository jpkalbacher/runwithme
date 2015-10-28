var _getActivities = function(){
  return ActivityStore.all();
};

var Main = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function(){
    return {activities: _getActivities()};
  },

  componentDidMount: function(){
    ActivityStore.addChangeListener(this._activitiesChanged);
  },

  componentWillUnmount: function(){
    ActivityStore.removeChangeListener(this._activitiesChanged);
  },

  _activitiesChanged: function(){
      this.setState({activities: _getActivities()});
  },

  handleMarkerClick: function(activity) {
    if(activity.owner_id === window.CURRENT_USER_ID){
      this.props.history.pushState(null, "/main/" + activity.id + "/edit/");
    } else {
      this.props.history.pushState(null, "/main/" + activity.id);
    }
  },

  render: function(){
    return (
      <div className="main-page">
        < Map onMarkerClick={this.handleMarkerClick}
              activities={this.state.activities}
              />
        {this.props.children}
        <Profile / >
      </div>
    )
  }
})
