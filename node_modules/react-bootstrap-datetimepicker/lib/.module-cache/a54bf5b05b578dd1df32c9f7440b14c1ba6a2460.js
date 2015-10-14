var DateTimePickerHours, React;

React = require('react');
Glyphicon = require('react-bootstrap').Glyphicon;

DateTimePickerHours = React.createClass({displayName: "DateTimePickerHours",
  propTypes: {
    setSelectedHour: React.PropTypes.func.isRequired,
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
      React.createElement("div", {className: "timepicker-hours", "data-action": "selectHour", style: {display: 'block'}}, 
        this.renderSwitchButton(), 
        React.createElement("table", {className: "table-condensed"}, 
          React.createElement("tbody", null, 
            React.createElement("tr", null, 
              React.createElement("td", {className: "hour", onClick: this.props.setSelectedHour}, "01"), 

              React.createElement("td", {className: "hour", onClick: this.props.setSelectedHour}, "02"), 

              React.createElement("td", {className: "hour", onClick: this.props.setSelectedHour}, "03"), 

              React.createElement("td", {className: "hour", onClick: this.props.setSelectedHour}, "04")
            ), 

            React.createElement("tr", null, 
              React.createElement("td", {className: "hour", onClick: this.props.setSelectedHour}, "05"), 

              React.createElement("td", {className: "hour", onClick: this.props.setSelectedHour}, "06"), 

              React.createElement("td", {className: "hour", onClick: this.props.setSelectedHour}, "07"), 

              React.createElement("td", {className: "hour", onClick: this.props.setSelectedHour}, "08")
            ), 

            React.createElement("tr", null, 
              React.createElement("td", {className: "hour", onClick: this.props.setSelectedHour}, "09"), 

              React.createElement("td", {className: "hour", onClick: this.props.setSelectedHour}, "10"), 

              React.createElement("td", {className: "hour", onClick: this.props.setSelectedHour}, "11"), 

              React.createElement("td", {className: "hour", onClick: this.props.setSelectedHour}, "12")
            ), 

            React.createElement("tr", null, 
              React.createElement("td", {className: "hour", onClick: this.props.setSelectedHour}, "13"), 

              React.createElement("td", {className: "hour", onClick: this.props.setSelectedHour}, "14"), 

              React.createElement("td", {className: "hour", onClick: this.props.setSelectedHour}, "15"), 

              React.createElement("td", {className: "hour", onClick: this.props.setSelectedHour}, "16")
            ), 

            React.createElement("tr", null, 
              React.createElement("td", {className: "hour", onClick: this.props.setSelectedHour}, "17"), 

              React.createElement("td", {className: "hour", onClick: this.props.setSelectedHour}, "18"), 

              React.createElement("td", {className: "hour", onClick: this.props.setSelectedHour}, "19"), 

              React.createElement("td", {className: "hour", onClick: this.props.setSelectedHour}, "20")
            ), 

            React.createElement("tr", null, 
              React.createElement("td", {className: "hour", onClick: this.props.setSelectedHour}, "21"), 

              React.createElement("td", {className: "hour", onClick: this.props.setSelectedHour}, "22"), 

              React.createElement("td", {className: "hour", onClick: this.props.setSelectedHour}, "23"), 

              React.createElement("td", {className: "hour", onClick: this.props.setSelectedHour}, "24")
            )
          )
        )
      )
    );
  }
});

module.exports = DateTimePickerHours;
