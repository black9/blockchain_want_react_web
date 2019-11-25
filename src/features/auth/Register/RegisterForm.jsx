import React from "react";
import { connect } from "react-redux";
import { Form, Segment, Button, Label } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import { combineValidators, isRequired } from "revalidate";
import TextInput from "../../../app/common/form/TextInput";
import { registerUser } from "../authActions";
import { RadioGroup, RadioButton } from "react-radio-buttons";

// 소셜 로그인은 추후에 추가예정...
//import SocialLogin from '../SocialLogin/SocialLogin'

const actions = {
  registerUser
};

const validate = combineValidators({
  displayName: isRequired("displayName"),
  email: isRequired("email"),
  password: isRequired("password"),
  creditrating: isRequired("creditrating")
});

const RegisterForm = ({
  registerUser,
  handleSubmit,
  error,
  invalid,
  submitting
}) => {
  return (
    <div>
      <Form size="large" onSubmit={handleSubmit(registerUser)}>
      <RadioGroup onChange={this.onChange} horizontal>
          <RadioButton value="investor">투자자</RadioButton>
          <RadioButton value="lo aner">대출자</RadioButton>
        </RadioGroup>
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
          {error && (
            <Label basic color="red">
              {error}
            </Label>
          )}
          <Button
            disabled={invalid || submitting}
            fluid
            size="large"
            color="green"
          >
            회원가입
          </Button>
        </Segment>
      </Form>
    </div>
  );
};

export default connect(
  null,
  actions
)(reduxForm({ form: "registerForm", validate })(RegisterForm));
