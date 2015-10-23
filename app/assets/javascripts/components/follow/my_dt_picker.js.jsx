var MyDTPicker = React.createClass({
    renderDay: function( props, currentDate, selectedDate ){
        return <td {...props}>{ '0' + currentDate.date() }</td>;
    },
    renderMonth: function( props, month, year, selectedDate){
        return <td {...props}>{ month }</td>;
    },
    renderYear: function( props, year, selectedDate ){
        return <td {...props}>{ year % 100 }</td>;
    },

    render: function(){
        return (
            <Datetime
            renderDay={ this.renderDay }
            renderMonth={ this.renderMonth }
            renderYear={ this.renderYear } />
        )
    }
});
