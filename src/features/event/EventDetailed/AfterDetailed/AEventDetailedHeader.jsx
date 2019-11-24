import React from "react";
import { Segment, Image, Item, Header, Button, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";
import format from "date-fns/format";

const eventImageStyle = {
  filter: "brightness(30%)"
};

const eventImageTextStyle = {
  position: "absolute",
  bottom: "5%",
  left: "5%",
  width: "100%",
  height: "auto",
  color: "white"
};

const EventDetailedHeader = ({
  openModal,
  authenticated,
  loading,
  event,
  isHost,
  isGoing,
  goingToEvent,
  cancelGoingToEvent
}) => {
  let eventDate;
  if (event.date) {
    eventDate = event.date.toDate();
  }
  return (
    <Segment.Group>
      <Segment basic attached="top" style={{ padding: "0" }}>
        <Image
          src={`/assets/categoryImages/${event.category}.jpg`}
          fluid
          style={eventImageStyle}
        />

        <Segment basic style={eventImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  content={event.title}
                  style={{ color: "white" }}
                />
                <p>{format(eventDate, "dddd Do MMMM")}</p>
                <p>
                  대출자 명 <strong>{event.hostedBy}</strong>
                </p>
                
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached="bottom">
        {!isHost && (
          <div>
            {isGoing && !event.cancelled && (
              <Button onClick={() => cancelGoingToEvent(event)}>
                투자 포기
              </Button>
            )}

            {!isGoing &&
              authenticated && !event.cancelled && (
                <Button
                  onClick={() => goingToEvent(event)}
                  color= "blue"
                >
                  투자 수익 받기 
                </Button>
              )}

            {!authenticated && !event.cancelled && (
              <Button
                loading={loading}
                onClick={() => openModal("UnauthModal")}
                color="yellow"
              >
                투자하기
              </Button>
            )}
            {event.calcelled &&
              !isHost && (
                <Label
                  size="large"
                  color="red"
                  content="삭제 대기중인 대출 게시글 입니다."
                />
              )}
          </div>
        )}

        {isHost && (
          <Button as={Link} to={`/manage/${event.id}`} color="orange">
           수정
          </Button>
        )}


        
      </Segment>
    </Segment.Group>
  );
};

export default EventDetailedHeader;
