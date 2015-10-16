var Main = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  handleMarkerClick: function(activity) {
    if(activity.owner_id === window.CURRENT_USER_ID){
      this.props.history.pushState(null, "main/" + activity.id + "/edit/");
    } else {
      this.props.history.pushState(null, "main/" + activity.id);
    }
  },

  handleCreate: function(){
    this.props.history.pushState(null, "/main/new");
  },

  render: function(){
    return (
      <div>
        < Map onMarkerClick={this.handleMarkerClick} />
        {this.props.children}
        <div className="create-button">
          <button type="button" class="btn btn-default btn-lg" onClick={this.handleCreate}>
                <span class="glyphicon glyphicon-edit"></span>
            New Activity</button>
        </div>
      </div>
    )
  }
})
