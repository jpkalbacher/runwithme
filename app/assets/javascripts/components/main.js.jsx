var Main = React.createClass({
  render: function(){
    return (
      <div>
        < Map />
        {this.props.children}
      </div>
    )
  }
})
