import React from 'react';
import { connect } from 'react-redux'
import { Form, Segment, Button, Label} from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { combineValidators, isRequired } from 'revalidate'
import TextInput from '../../../app/common/form/TextInput';
import { registerUser } from '../authActions'
import SelectInput from "../../../app/common/form/SelectInput";

// 소셜 로그인은 추후에 추가예정...
//import SocialLogin from '../SocialLogin/SocialLogin' 


const actions = {
  registerUser
}

const validate = combineValidators({
  displayName: isRequired('displayName'),
  email: isRequired('email'),
  password: isRequired('password'),
  creditrating: isRequired('creditrating')
})

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


const RegisterForm = ({registerUser, handleSubmit, error, invalid, submitting}) => {
  return (
    <div>
      <Form size="large" onSubmit={handleSubmit(registerUser)}>
        <Segment>
        <Field
            name="displayName"
            type="text"
            component={TextInput}
            placeholder="이름"
          />
          <Field
            name="email"
            type="text"
            component={TextInput}
            placeholder="이메일"
          />
          <Field
            name="password"
            type="password"
            component={TextInput}
            placeholder="비밀번호"
          />

            <Field
              name="creditrating"
              type="text"
              component={SelectInput}
              options={creditrating}
              placeholder="신용등급을 선택하세요"
            />
          {error && <Label basic color='red'>{error}</Label>}
          <Button disabled={invalid || submitting} fluid size="large" color="teal">
            회원가입
          </Button>
        </Segment>
      </Form>
    </div>
  );
};

export default connect(null, actions)(reduxForm({form: 'registerForm', validate})(RegisterForm));