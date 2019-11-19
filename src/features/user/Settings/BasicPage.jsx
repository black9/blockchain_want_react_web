import React, { Component } from 'react';
import { Segment, Form, Header, Divider, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import moment from 'moment';
import DateInput from '../../../app/common/form/DateInput';
import TextInput from '../../../app/common/form/TextInput';
import RadioInput from '../../../app/common/form/RadioInput';
import SelectInput from "../../../app/common/form/SelectInput";

class BasicPage extends Component {


  
  render() {
    const { pristine, submitting, handleSubmit, updateProfile } = this.props;

    const creditrating = [
      { key: "1", text: "1등급", value: "1" },
      { key: "2", text: "2등급", value: "2" },
      { key: "3", text: "3등급", value: "3" },
      { key: "4", text: "4등급", value: "4" },
      { key: "5", text: "5등급", value: "5" },
      { key: "6", text: "6등급", value: "6" },
      { key: "7", text: "7등급", value: "7" },
      { key: "8", text: "8등급", value: "8" },
      { key: "9", text: "9등급", value: "9" },
      { key: "10", text: "10등급", value: "10" },
    ];
    

    return (
      <Segment>
        <Header dividing size="large" content="개인정보" />
        <Form onSubmit={handleSubmit(updateProfile)}>
          <Field
            width={8}
            name="displayName"
            type="text"
            component={TextInput}
            placeholder="본명"
          />
          <Form.Group inline>
            <label>성별: </label>
            <Field
              name="gender"
              type="radio"
              value="male"
              label="남자"
              component={RadioInput}
            />
            <Field
              name="gender"
              type="radio"
              value="female"
              label="여자"
              component={RadioInput}
            />
          </Form.Group>
          <Field
            width={8}
            name="dateOfBirth"
            component={DateInput}
            dateFormat='YYYY-MM-DD'
            showYearDropdown={true}
            showMonthDropdown={true}
            dropdownMode='select'
            maxDate={moment().subtract(18, 'years')}
            placeholder="생년월일"
          />

          <Field
              name="creditrating"
              type="text"
              component={SelectInput}
              options={creditrating}
              placeholder="신용등급을 선택하세요"
            />

          <Divider />
          <Button
            disabled={pristine || submitting}
            size="large"
            positive
            content="내 프로필 변경"
          />
        </Form>
      </Segment>
    );
  }
}

export default reduxForm({ form: 'userProfile', enableReinitialize: true, destroyOnUnmount: false })(
  BasicPage
);
