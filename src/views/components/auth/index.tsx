import React, { FC, useState } from 'react';
import Button from '@material-ui/core/Button';

export const Auth: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="auth">
      <form className="auth-form" name="auth-form">
        <input
          type="text"
          name="name"
          placeholder="enter your name or nick name"
          onChange={(e): void => setName(e.target.value)}
          value={name}
        />
        <input
          type="email"
          name="email"
          placeholder="enter your email"
          onChange={(e): void => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          name="password"
          placeholder="enter your password"
          onChange={(e): void => setPassword(e.target.value)}
          value={password}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};
