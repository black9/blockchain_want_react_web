import React, { Component } from 'react';
import { Segment, Grid, Icon, Button } from 'semantic-ui-react';
import format from 'date-fns/format'

class EventDetailedInfo extends Component {
  state = {
    showMap: false
  }

  componentWillUnmount() {
    this.setState({
      showMap: false
    })
  }


  render() {
    const { event } = this.props;
    let eventDate;
    if (event.date) {
      eventDate = event.date.toDate()
    }
    return (
      <Segment.Group>
        <Segment attached="top">
          <Grid>
            <Grid.Column width={1}>
              <Icon size="large" color="teal" name="info" />
            </Grid.Column>
            <Grid.Column width={15}>
              <p>{event.description}</p>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment attached="middle">
          <Grid>
            <Grid.Column width={1}>
              <Icon size="large" color="teal" name="money" />
            </Grid.Column>
            <Grid.Column width={15}>
            <span>
            원하는 대출 금액 :
          {event.money} 원
           </span>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment attached>
          <Grid verticalAlign="bottom">
            <Grid.Column width={1}>
              <Icon name="calendar" size="large" color="teal" />
            </Grid.Column>
            <Grid.Column width={15}>
              <span>{format(eventDate, 'dddd Do MMM')} at {format(eventDate, 'h:mm A')}</span>
            </Grid.Column>
          </Grid>
        </Segment>
      </Segment.Group>
    );
  }
}

export default EventDetailedInfo;
