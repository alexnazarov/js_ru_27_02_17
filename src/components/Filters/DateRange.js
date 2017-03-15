import React, { Component, PropTypes } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import {connect} from 'react-redux'
import {filterArticles} from '../../AC'
import 'react-day-picker/lib/style.css'

class DateRange extends Component {
    static propTypes = {
        date: PropTypes.object.isRequired,
        filterArticles: PropTypes.func.isRequired
    };

    handleDayClick = (day) => {
        const { date, filterArticles } = this.props;
        const { from, to } = date;
        filterArticles({ date: DateUtils.addDayToRange(day, { from, to }) })
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

export default connect(mapStateToProps, { filterArticles })(DateRange)