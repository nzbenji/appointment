import React from 'react';
import DatePicker from "react-datepicker";
import setMinutes from "date-fns/setMinutes";
import setHours from "date-fns/setHours";

import "react-datepicker/dist/react-datepicker.css";

class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: setHours(setMinutes(new Date(), 30), 16)
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
    this.toggleCalendar()
  }

  toggleCalendar (e) {
    e && e.preventDefault()
    this.setState({isOpen: !this.state.isOpen})
  }

  render() {
    return (
      <div className="row">
        <pre className="column example__code">

        </pre>
        <h1>Select a date</h1>
        <div className="column">
        <h3>Select an available appointment day and time</h3>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            withPortal
            showTimeSelect
            minTime={setHours(setMinutes(new Date(), 0), 8)}
            maxTime={setHours(setMinutes(new Date(), 0), 17)}
            dateFormat="d MMMM, yyyy"
          />
        </div>
      </div>

      
    );
  }
}

export default View;
