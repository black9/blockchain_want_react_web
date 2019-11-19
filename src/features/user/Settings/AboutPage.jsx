import React from 'react';
import { Button, Divider, Form, Header, Segment } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import TextArea from '../../../app/common/form/TextArea';

const AboutPage = ({ pristine, submitting, handleSubmit, updateProfile }) => {
  return (
    <Segment>
      <Header dividing size="large" content="나를 소개하세요!" />
      <p>자기소개 변경 페이지입니다</p>
      <Form onSubmit={handleSubmit(updateProfile)}>
        <Divider />
        <label>자기 소개</label>
        <Field name="about" component={TextArea} placeholder="About Me" />
        <Divider />
        <Button disabled={pristine || submitting} size="large" positive content="내 자기소개 변경하기" />
      </Form>
    </Segment>
  );
};

export default reduxForm({ form: 'userProfile', enableReinitialize: true, destroyOnUnmount: false })(AboutPage);