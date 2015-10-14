var Main = React.createClass({
  render: function(){
    return (
      <div>
        <Event>{this.props.children}</Event>
      </div>
    )
  }
})
