var MyDTPicker = React.createClass({
  render: function(){
      return <Datetime
          renderDay={ this.renderDay }
          renderMonth={ this.renderMonth }
          renderYear={ this.renderYear }
      />;
  },
  renderDay: function( props, currentDate, selectedDate ){
    return <td {...props} onChange={this.handleStartTime}>{ '0' + currentDate.date() }</td>;
  },
  renderMonth: function( props, month, year, selectedDate){
    return <td {...props} onChange={this.handleStartTime}>{ month }</td>;
  },
  renderYear: function( props, year, selectedDate ){
    return <td {...props} onChange={this.handleStartTime}>{ year % 100 }</td>;
  }
});
