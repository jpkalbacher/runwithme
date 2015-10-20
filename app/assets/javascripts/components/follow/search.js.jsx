var Search = React.createClass({
  getInitialState: function(){
    return {search_fragment: ""};
  },

  updateSeachFragment: function(e){
    var that = this;
    e.preventDefault();
    this.state.search_fragment = e.target.value;
    _.debounce(ApiUtil.findUsers(this.state.search_fragment), 500);
    this.setState({search_fragment: e.target.value});
  },

  render: function(){
    return (
      <form>
          <input type="text"
                 placeholder="Search..."
                 onChange={this.updateSeachFragment}/>
      </form>
    )
  }
});
