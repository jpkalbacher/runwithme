var FollowContainer = React.createClass({
  render: function() {
    return (
      <div className="well">
        <div className="tab-content">
          <div className="tab-pane fade in" id="tab1">
            <UsersTable />
            </div>
          <div className="tab-pane fade in" id="tab2">
            <FollowersTable />
          </div>
          <div className="tab-pane fade in" id="tab3">
          </div>
        </div>
      </div>
    )
  }
})
