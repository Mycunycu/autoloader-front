import React, { FC } from 'react';
import { connect } from 'react-redux';
import { RegisterForm } from './registerForm';
import { registrationRequest } from '../../../redux/actions/registration';

type PropsType = typeof mapDispatchToProps;

const RegisterPage: FC<PropsType> = (props) => {
  return (
    <RegisterForm
      registrationRequest={props.registrationRequest}
    />
  )
}

const mapDispatchToProps = {
  registrationRequest
}

export default connect(null, mapDispatchToProps)(RegisterPage);
