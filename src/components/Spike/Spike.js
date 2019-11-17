import React, {Component} from 'react';
import './Spike.css'
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

//multi-line email 
import { ReactMultiEmail, isEmail } from 'react-multi-email';
import 'react-multi-email/style.css';

//calendar
import AddToCalendar from 'react-add-to-calendar';

class Spike extends Component {
    state={
        emails:[],
    }

     event = {
        title: 'Sample Event',
        description: 'This is the sample event provided as an example only',
        location: 'Portland, OR',
        startTime: '2019-11-16T20:15:00-04:00',
        endTime: '2019-11-16T21:45:00-04:00'
    };

  render() {
    //for the calendar button style
    let icon = { 'calendar-plus-o': 'left' };
    //let icon = { textOnly: 'none' };
    let items = [
        { google: 'Google' },
        { apple: 'Apple' }
     ];
     

    //for the email list 
    const { emails } = this.state;

    return ( 
     <div>
         <div className="email">
         <h3>Email</h3>
        <ReactMultiEmail
          placeholder="placeholder"
          emails={emails}
          onChange={(_emails: string[]) => {
            this.setState({ emails: _emails });
          }}
          validateEmail={email => {
            return isEmail(email); // return boolean
          }}
          getLabel={(
            email: string,
            index: number,
            removeEmail: (index: number) => void,
          ) => {
            return (
              <div data-tag key={index}>
                {email}
                <span data-tag-handle onClick={() => removeEmail(index)}>
                  ×
                </span>
              </div>
            );
          }}
        />
        <br />
        <h4>react-multi-email value</h4>
        <p>{emails.join(', ') || 'empty'}</p>
     </div>
     <div className="googleCalendar">
     

        {/*
        startTime and endTime can use any datetime
        string that is acceptable by MomentJS
        */}
        <AddToCalendar 
        event={this.event}
        listItems={items} 
        buttonTemplate={icon}/>
     </div>
     </div>
  )}
}

export default connect()(Spike);
