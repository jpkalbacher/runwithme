var ProfileNav = React.createClass({
  render: function(){
    return (
      <div className="btn-pref btn-group btn-group-justified btn-group-lg"
           role="group"
           aria-label="...">
        <div className="btn-group" role="group">
          <button type="button"
                  id="stars"
                  className="btn btn-default  "
                  href="#tab1"
                  data-toggle="tab">
                  <span className="glyphicon glyphicon-search" aria-hidden="true">
                  </span>
                  <div className="hidden-xs">Find Users</div>
          </button>
        </div>
        <div className="btn-group" role="group">
          <button type="button"
                  id="favorites"
                  className="btn btn-default"
                  href="#tab2"
                  data-toggle="tab">
                  <span className="glyphicon glyphicon-user" aria-hidden="true">
                  </span>
                <div className="hidden-xs">Followers</div>
          </button>
        </div>
        <div className="btn-group" role="group">
          <button type="button"
                  id="following"
                  className="btn btn-default"
                  href="#tab3"
                  data-toggle="tab">
                  <span className="glyphicon glyphicon-user" aria-hidden="true">
                  </span>
                  <div className="hidden-xs">following</div>
          </button>
        </div>
      </div>
    )
  }
})
