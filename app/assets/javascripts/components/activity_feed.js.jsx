var ActivityFeed = React.createClass({
  getInitialState: function(){
    ApiUtil.fetchMyActivities();
    return {activities: MyActivitiesStore.all()};
  },

  componentDidMount: function(){
    MyActivitiesStore.addChangeListener(this._onChange);
    ApiUtil.fetchMyActivities();
  },

  componentWillUnmount: function(){
    MyActivitiesStore.removeChangeListener(this._onChange);
  },

  _onChange: function(){
    this.setState({activities: MyActivitiesStore.all()});
  },

  render: function() {
    var rows = [];
    this.state.activities.forEach(function(activity){
      rows.push(<ActivityRow activity={activity} key={activity.id} />);
    });
    return (
      <div>
        <h1 className="activity-table">Your Upcoming Activities</h1>
        <table className="table table-striped">
            <tbody>{rows}</tbody>
        </table>
      </div>

    );
  }
});
