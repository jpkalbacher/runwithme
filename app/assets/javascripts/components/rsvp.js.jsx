var RSVP = React.createClass({
  getInitialState: function(){
    return {activity:this.props.activity};
  },

  componentDidMount: function(){
    CurrentActivityStore.addSingleChangeListener(this._activityChanged);
  },

  componentWillUnmount: function() {
    CurrentActivityStore.removeSingleChangeListener(this._activityChanged);
  },

  _activityChanged: function () {
    var activity = CurrentActivityStore.current();
    this.setState({ activity: activity });
  },

  _handleAttend: function (e){
    var activity = this.state.activity.id;
    e.preventDefault();
    ApiUtil.handleAttend(activity);
  },

  render: function(){
    if(this.state.activity.attending === false){
      var buttons = (
      <button className="submit-button btn btn-default btn-lg"
        onClick={this._handleAttend}>
        Join
      </button>
      );
    } else {
      buttons = "You are attending";
    }
    return (
      <div className="rsvp">
        <span>RSVP</span><br /><br />
        <span>{buttons}</span>
      </div>
    )
  },
});
