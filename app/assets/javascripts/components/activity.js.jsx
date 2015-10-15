var Activities = React.createClass({
  render: function(){
    return (
      <div>
        <h1>Rendered</h1>
        {this.props.children}
      </div>
    )
  }
});
