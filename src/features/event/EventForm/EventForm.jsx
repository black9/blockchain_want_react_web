import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { withFirestore } from "react-redux-firebase";
// import Script from "react-load-script";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { Segment, Form, Button, Grid, Header } from "semantic-ui-react";
import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan
} from "revalidate";
import { createEvent, updateEvent, cancelToggle } from "../eventActions";
import TextInput from "../../../app/common/form/TextInput";
import TextArea from "../../../app/common/form/TextArea";
import SelectInput from "../../../app/common/form/SelectInput";
import DateInput from "../../../app/common/form/DateInput";

const mapState = (state, ownProps) => {
  let event = {};

  if (state.firestore.ordered.events && state.firestore.ordered.events[0]) {
    event = state.firestore.ordered.events[0];
  }

  return {
    initialValues: event,
    event,
    loading: state.async.loading
  };
};

const actions = {
  createEvent,
  updateEvent,
  cancelToggle
};

const category = [
  { key: "Loan", text: "대출", value: "Loan" },
  { key: "empty", text: "Empty", value: "Empty" },
];


// "$class": "com.betweak.carauction.Board",
//     "created": "string",
//     "hostUid": "string",
//     "date": "string",
//     "userUid": []

// [
//   {
//     "$class": "com.betweak.carauction.SampleTransaction",
//     "board": {},
//     "newuserUid": "string",
//     "transactionId": "string",
//     "timestamp": "2019-11-06T02:33:19.229Z"
//   }
// ]
// http://localhost:3000/api/Board




// export async function sendtobc (event){
//   let url ="http://localhost:3000/api/Board";
//   let today = new Date();
//   const body={
//     $class: "com.betweak.carauction.Board",
//     created: today,
//     hostUid: `com.betweak.carauction.Board#${today}`,
//     date:today
    
//   };
//   console.log(JSON.stringify(body));

//   const response = await fetch(url,{
//     method:"POST",
//     headers:{
//       Accept:"application/json",
//       "Content-Type": "application/json"

//     },
//     body:JSON.stringify(body)
//   });
  

//   if (response.ok) {
//     console.log(response);
//     return response.json();

//   }
//     return false
    


// }



const validate = combineValidators({
  title: isRequired({ message: "대출 목적을 적어주세요" }),
  category: isRequired({ message: "카테고리를 선택하여주세요" }),
  description: composeValidators(
    isRequired({ message: "빈 공간으로 설정할수 없습니다." }),
    hasLengthGreaterThan(4)({
      message: "5글자 이상 입력해주세요"
    })
  )(),
  money: isRequired({ message: "금액을 입력해주세요 " }),
  date: isRequired("date")
});

class EventForm extends Component {
  state = {
    cityLatLng: {},
    venueLatLng: {},
    scriptLoaded: false
  };

  async componentDidMount() {
    const { firestore, match } = this.props;
    await firestore.setListener(`events/${match.params.id}`);
  }

  async componentWillUnmount() {
    const { firestore, match } = this.props;
    await firestore.unsetListener(`events/${match.params.id}`);
  }

  handleScriptLoaded = () => this.setState({ scriptLoaded: true });

  handleCitySelect = selectedCity => {
    geocodeByAddress(selectedCity)
      .then(results => getLatLng(results[0]))
      .then(latlng => {
        this.setState({
          cityLatLng: latlng
        });
      })
      .then(() => {
        this.props.change("city", selectedCity);
      });
  };

  handleVenueSelect = selectedVenue => {
    geocodeByAddress(selectedVenue)
      .then(results => getLatLng(results[0]))
      .then(latlng => {
        this.setState({
          venueLatLng: latlng
        });
      })
      .then(() => {
        this.props.change("venue", selectedVenue);
      });
  };

  onFormSubmit = async values => {
    values.venueLatLng = this.state.venueLatLng;
    if (this.props.initialValues.id) {
      if (Object.keys(values.venueLatLng).length === 0) {
        values.venueLatLng = this.props.event.venueLatLng;
      }
      await this.props.updateEvent(values);
      this.props.history.goBack();
    } else {
      this.props.createEvent(values);
      this.props.history.push("/events");
    }
  };

  render() {
    const {
      loading,
      invalid,
      submitting,
      pristine,
      event,
      cancelToggle
    } = this.props;

    function lottoNum (array) {
      if (! array) {
      var array = [];
      }
      let n = Math.floor(Math.random() * 10000000000000000) + 1;
      if (array.length < 1 && array.indexOf(n) < 0) {
      array.push(n);
      return lottoNum(array);
      
      } else {
      return array.toString();
      }  
      }

    return (
      <Grid>
      
      <Grid.Column width={10}>
        <Segment>
          <Header sub color="teal" content="대출" />
          <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
          <Field
              name="category"
              type="text"
              component={SelectInput}
              options={category}
              placeholder="주제를 고르시오  -> 대출 "
            />
            <Field
              name="title"
              type="text"
              component={TextInput}
              placeholder="대출 목적을 적어주세요 ex)롤 스킨 RP 충전 5만원 부족"
            />
             <Field
              name="lottoNum"
              type="text"
              component={Text}
            />
            <Field
              name="description"
              type="text"
              component={TextArea}
              rows={3}
              placeholder="대출 목적을 상세히 적어주세요"
            />
            <Header sub color="teal" content="상세 정보" />

            <Field
              name="money"
              type="text"
              component={TextArea}
              rows={1}
              placeholder="금액을 적어주세요 ex)10,000 "
            />

            <Field
              name="date"
              type="text"
              component={DateInput}
              dateFormat="YYYY-MM-DD HH:mm"
              timeFormat="HH:mm"
              showTimeSelect
              placeholder="대출 신청 만기일을 설정하세요"
            />

            <Button
              
              loading={loading}
              disabled={invalid || submitting || pristine}
              positive
              type="submit"
            >
              신청하기
            </Button>
            <Button
              disabled={loading}
              onClick={this.props.history.goBack}
              type="button"
            >
              취소
            </Button>
              {event.id && (
                <Button
                  onClick={() => cancelToggle(!event.cancelled, event.id)}
                  type="button"
                  color={event.cancelled ? "green" : "red"}
                  floated="right"
                  content={
                    event.cancelled ? "Reactivate Event" : "Cancel Event"
                  }
                />
              )}
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default withFirestore(
  connect(
    mapState,
    actions
  )(
    reduxForm({ form: "eventForm", enableReinitialize: true, validate })(
      EventForm
    )
  )
);