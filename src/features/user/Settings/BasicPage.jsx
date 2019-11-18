import React, { Component } from 'react';
import { Segment, Form, Header, Divider, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import moment from 'moment';
import DateInput from '../../../app/common/form/DateInput';
import TextInput from '../../../app/common/form/TextInput';
import RadioInput from '../../../app/common/form/RadioInput';

class BasicPage extends Component {
  render() {
    const { pristine, submitting, handleSubmit, updateProfile } = this.props;
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
