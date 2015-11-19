var RSVP = React.createClass({
  getInitialState: function(){
    return {
      activity:this.props.activity,
      attending:this.props.activity.attending
    };
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
    var activityId = this.state.activity.id;
    e.preventDefault();
    if (this.state.attending === true) {
      ApiUtil.deleteAttend(activityId);
    } else {
      ApiUtil.handleAttend(activityId);
    }
    var attending = !this.state.attending;
    this.setState({attending:attending});
  },

  render: function(){
    var buttonLabel;
    if(this.state.attending){
      buttonLabel = "Not Going";
    } else {
      buttonLabel = "Join";
    }
    return (
      <div className="rsvp">
        <span>RSVP</span><br /><br />
        <button className="submit-button btn btn-default btn-lg"
          onClick={this._handleAttend}>
          {buttonLabel}
        </button>
      </div>
    )
  },
});
