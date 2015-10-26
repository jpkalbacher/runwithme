var Filters = React.createClass({
  getInitialState: function(){
    return {
      myActivities:true,
      followingActivities:true,
      publicActivities:true
    };
  },

  componentDidMount: function(){
    var currentFilters = this.currentFilters();
    ApiActions.changeFilters(currentFilters);
  },

  currentFilters: function(){
    var currentFilters = [];
    if (this.state.myActivities){
      currentFilters.push("currentUser");
    }
    if (this.state.followingActivities){
      currentFilters.push("followee");
    }
    if (this.state.publicActivities){
      currentFilters.push("other");
    }
    return currentFilters;
  },

  toggleMyActivities: function(){
    var myActivities = !this.state.myActivities;
    this.state.myActivities = myActivities;
    var currentFilters = this.currentFilters();
    ApiActions.changeFilters(currentFilters);
    this.setState({myActivities: myActivities});
  },

  toggleFollowingActivities: function(){
    var followingActivities = !this.state.followingActivities;
    this.state.followingActivities = followingActivities;
    var currentFilters = this.currentFilters();
    ApiActions.changeFilters(currentFilters);
    this.setState({followingActivities: followingActivities});
  },

  togglePublicActivities: function(){
    var publicActivities = !this.state.publicActivities;
    this.state.publicActivities = publicActivities;
    var currentFilters = this.currentFilters();
    ApiActions.changeFilters(currentFilters);
    this.setState({publicActivities: publicActivities});
  },

  render: function(){
    return (
      <div className="show-filters">
        <button className="btn btn-default btn-lg"
                onClick={this.toggleMyActivities}
                value={this.state.myActivities}>
                My Activities </button>
        <button className="btn btn-default btn-lg"
                onClick={this.toggleFollowingActivities}
                value={this.state.followingActivities}>
                Following</button>
        <button className="btn btn-default btn-lg"
                onClick={this.togglePublicActivities}
                value={this.state.publicActivities}>
                Public</button>
      </div>
    )
  }
});
