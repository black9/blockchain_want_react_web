import React from 'react';
import { Card, Grid, Header, Image, Segment, Tab } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import format from 'date-fns/format'

const panes = [
  {menuItem: '전체 목록', pane: {key: 'allEvents'}},
  {menuItem: '지난 투자 목록', pane: {key: 'pastEvents'}},
  {menuItem: '현재 투자 목록', pane: {key: 'futureEvents'}},
  {menuItem: '대출 목록', pane: {key: 'hosted'}},
]

const UserDeteiledEvents = ({ events, eventsLoading, changeTab }) => {
  return (
    <Grid.Column width={12}>
      <Segment attached loading={eventsLoading}>
        <Header icon="calendar" content="Events" />
        <Tab onTabChange={(e, data) => changeTab(e, data)} panes={panes} menu={{secondary: true, pointing: true}}/>
        <br/>

        <Card.Group itemsPerRow={5}>
          {events &&
            events.map(event => (
              <Card as={Link} to={`/event/${event.id}`} key={event.id}>
                <Image src={`/assets/categoryImages/${event.category}.jpg`} />
                <Card.Content>
                  <Card.Header textAlign="center">{event.title}</Card.Header>
                  <Card.Meta textAlign="center">
                    <div>{format(event.date.toDate(), 'DD MMM YYYY')}</div>
                    <div>{format(event.date.toDate(), 'h:mm A')}</div>
                  </Card.Meta>
                </Card.Content>
              </Card>
            ))}
        </Card.Group>
      </Segment>
    </Grid.Column>
  );
};

export default UserDeteiledEvents;
  