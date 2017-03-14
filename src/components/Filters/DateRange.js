import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import {connect} from 'react-redux'
import {filterArticlesByDate} from '../../AC'
import 'react-day-picker/lib/style.css'

class DateRange extends Component {
    handleDayClick = (day) => {
        console.log(DateUtils.addDayToRange(day))

        //this.setState(DateUtils.addDayToRange(day, this.state))
    }

    render() {
        const { date } = this.props;
        const selectedRange = date.from && date.to && `${date.from.toDateString()} - ${date.to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from: date.from, to: date.to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        date: state.filters.date
    }
}

export default connect(mapStateToProps, { filterArticlesByDate })(DateRange)