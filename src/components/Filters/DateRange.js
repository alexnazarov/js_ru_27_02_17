import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import {connect} from 'react-redux'
import {filterArticlesByDate} from '../../AC'
import 'react-day-picker/lib/style.css'

class DateRange extends Component {
    handleDayClick = (day) => {
        const { date, filterArticlesByDate } = this.props;
        const { from, to } = date;
        filterArticlesByDate(DateUtils.addDayToRange(day, { from, to }))
    }

    render() {
        const { date } = this.props;
        const { from, to } = date;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`

        return (
            <div className="date-range">
                <DayPicker
                    selectedDays={ [from, { from, to }] }
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