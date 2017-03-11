import React, { Component } from 'react'

import moment from 'moment';

import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class Range extends Component {
    state = {
        from: null,
        to: null,
    }

    render() {
        const { from, to } = this.state;

        return (
            <div>
                { !from && !to && <p>Please select the <strong>first day</strong>.</p> }
                { from && !to && <p>Please select the <strong>last day</strong>.</p> }
                { from && to &&
                    <p>
                        You chose from { moment(from).format('L') } to { moment(to).format('L') }.
                        { ' ' }<a href="." onClick={ this.handleResetClick.bind(this) }>Reset</a>
                    </p>
                }

                <DayPicker
                    numberOfMonths={ 2 }
                    selectedDays={ [from, { from, to }] }
                    onDayClick={ this.handleDayClick.bind(this) }
                />
            </div>
        )
    }

    handleDayClick(day) {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    }

    handleResetClick(e) {
        e.preventDefault();

        this.setState({
            from: null,
            to: null
        });
    }
}

export default Range