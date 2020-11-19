import React, { FC, useState } from 'react';

import { TextField, OutlinedInput, FormControl, InputLabel } from '@material-ui/core';

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

  return (
    <div className='registration'>
      <div className='registration-logo'>
        <p className='registration-img'>To Do logo</p>
      </div>
      <form className='registration-form'>
        <FormControl>
          <InputLabel htmlFor='registration-name'>Имя</InputLabel>
          <OutlinedInput
            id='registration-name'
          />
        </FormControl>
        {/* <div className='registration-group'>
          <TextField
            label='Имя'
            variant='outlined'
            required={true}
          />
        </div> */}
        <div className='registration-group'>
          <TextField
            label='Почта'
            variant='outlined'
            type='email'
            required={true}
          />
        </div>
        <div className='registration-group'>
          <TextField
            label='Пароль'
            variant='outlined'
            required={true}
          />
        </div>
        <div className='registration-group'>
          <TextField
            label='Подтвердите пароль'
            variant='outlined'
            required={true}
          />
        </div>
      </form>
    </div>
  )
}