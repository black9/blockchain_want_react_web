import React from "react";
import {
  Header,
  Segment,
  Feed,
  Sticky,
  Item,
  Grid
} from "semantic-ui-react";
import EventActivityItem from "./EventActivityItem";

const EventActivity = ({ activities, contextRef }) => {
  return (
    <Sticky context={contextRef} offset={100}>
      <Header attached="top" style={{ color: "Green" }} content="뭐 넣지? 추천 받음" />
      <Segment attached>
        <Item>
          <Item.Content>
          <Grid>
                  <span> 뭘 넣을까 고민중</span>
              </Grid>

              <Grid>
                  <span> 빠아아아아아아아아아아앙ㅇ아아아아앙ㅇ아아앙ㅇ아아아아아아아아앙ㅇㅇ</span>
              </Grid>

              <Grid>
                  <span> 배고파아아아ㅏ아아아아아ㅏ아아아아아아아아아아에</span>
              </Grid>

              <Grid>
                  <span> ㅗㄱ고곡고고고ㅗ고고곡고ㅗ고곡고고</span>
              </Grid>

          </Item.Content>
        </Item>

        <Feed>
          {activities &&
            activities.map(activity => (
              <EventActivityItem key={activity.id} activity={activity} />
            ))}
        </Feed>
      </Segment>
    </Sticky>
  );
};

export default EventActivity;
