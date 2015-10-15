var Main = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  handleMarkerClick: function(activity) {
    if(activity.owner_id === window.CURRENT_USER_ID){
      this.props.history.pushState(null, "/main/activities/edit/" + activity.id)
    } else {
      this.props.history.pushState(null, "/main/activities/" + activity.id);
    }
  },

  render: function(){
    return (
      <div>
        < Map onMarkerClick={this.handleMarkerClick} />
        {this.props.children}
      </div>
    )
  }
})
