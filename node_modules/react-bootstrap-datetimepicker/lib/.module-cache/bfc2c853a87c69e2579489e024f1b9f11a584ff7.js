var DateTimePickerMinutes, React;

React = require('react');
Glyphicon = require('react-bootstrap').Glyphicon;

DateTimePickerMinutes = React.createClass({displayName: "DateTimePickerMinutes",
  propTypes: {
    setSelectedMinute: React.PropTypes.func.isRequired,
    onSwitch: React.PropTypes.func.isRequired
  },
  renderSwitchButton: function() {
    return this.props.mode === Constants.MODE_TIME ?
        (
            React.createElement("ul", {className: "list-unstyled"}, 
              React.createElement("li", null, 
                React.createElement("span", {className: "btn picker-switch", style: {width:'100%'}, onClick: this.props.onSwitch}, React.createElement(Glyphicon, {glyph: "time"}))
              )
            )
        ) :
        null;
  },
  render: function() {
    return (
      React.createElement("div", {className: "timepicker-minutes", "data-action": "selectMinute", style: {display: 'block'}}, 
        this.renderSwitchButton(), 
        React.createElement("table", {className: "table-condensed"}, 
          React.createElement("tbody", null, 
            React.createElement("tr", null, 
              React.createElement("td", {className: "minute", onClick: this.props.setSelectedMinute}, "00"), 

              React.createElement("td", {className: "minute", onClick: this.props.setSelectedMinute}, "05"), 

              React.createElement("td", {className: "minute", onClick: this.props.setSelectedMinute}, "10"), 

              React.createElement("td", {className: "minute", onClick: this.props.setSelectedMinute}, "15")
            ), 

            React.createElement("tr", null, 
              React.createElement("td", {className: "minute", onClick: this.props.setSelectedMinute}, "20"), 

              React.createElement("td", {className: "minute", onClick: this.props.setSelectedMinute}, "25"), 

              React.createElement("td", {className: "minute", onClick: this.props.setSelectedMinute}, "30"), 

              React.createElement("td", {className: "minute", onClick: this.props.setSelectedMinute}, "35")
            ), 

            React.createElement("tr", null, 
              React.createElement("td", {className: "minute", onClick: this.props.setSelectedMinute}, "40"), 

              React.createElement("td", {className: "minute", onClick: this.props.setSelectedMinute}, "45"), 

              React.createElement("td", {className: "minute", onClick: this.props.setSelectedMinute}, "50"), 

              React.createElement("td", {className: "minute", onClick: this.props.setSelectedMinute}, "55")
            )
          )
        )
      )
    );
  }
});

module.exports = DateTimePickerMinutes;
