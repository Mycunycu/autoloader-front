import React, { FC, useState } from 'react';

import { OutlinedInput, FormControl, InputLabel, InputAdornment, IconButton, Button } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import './register.sass';

interface IState {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  isShowPassword: boolean;
}

export const RegisterForm: FC = () => {
  const [values, setValues] = useState<IState>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    isShowPassword: false
  });

  const onChangeValues = (prop: keyof IState) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, isShowPassword: !values.isShowPassword });
  }

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  }

  const getAdornment = () => {
    return (
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          edge="end"
        >
          {values.isShowPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </InputAdornment>
    )
  }

  const onSubmitRegistration = () => {
    
  }

  return (
    <div className='registration'>
      <div className='registration-logo'>
        <p className='registration-img'>To Do logo</p>
      </div>
      <form className='registration-form' onSubmit={onSubmitRegistration}>
        <FormControl>
          <InputLabel htmlFor='registration-name'>Имя</InputLabel>
          <OutlinedInput
            id='registration-name'
            type='text'
            required={true}
            value={values.name}
            onChange={onChangeValues('name')}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor='registration-email'>Почта</InputLabel>
          <OutlinedInput
            id='registration-email'
            type='text'
            required={true}
            value={values.email}
            onChange={onChangeValues('email')}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor='registration-password'>Пароль</InputLabel>
          <OutlinedInput
            id='registration-password'
            type={values.isShowPassword ? 'text' : 'password'}
            required={true}
            value={values.password}
            onChange={onChangeValues('password')}
            endAdornment={getAdornment()}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor='registration-confirmPassword'>Подтвердите пароль</InputLabel>
          <OutlinedInput
            id='registration-confirmPassword'
            type={values.isShowPassword ? 'text' : 'password'}
            required={true}
            value={values.confirmPassword}
            onChange={onChangeValues('confirmPassword')}
            endAdornment={getAdornment()}
          />
        </FormControl>
        <Button
          type='submit'
          variant='contained'
          color='primary'
        >
          регистрация
        </Button>
      </form>
    </div>
  )
}