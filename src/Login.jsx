import React, { useState } from 'react';
import TextField  from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button/Button';
import MaterialLink from '@material-ui/core/Link/Link';
import { Link, useHistory } from 'react-router-dom';
import Alert from '@material-ui/core/lab/Alert';

export default function Login({ currentUser }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleLogin = async(e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/users?email=${email}`);
    const users = await response.json();

    if (users.length >0 && users[0].password === password) {
      currentUser(users[0]);
      history.push('/');
    }else {
      setError('Either the username or password do not match');
    }
  }

  return (
    <form onSubmit={handleLogin} >
      {/*error && <p>{error}</p>*/}
      <TextField value={email} onChange={(e) => setEmail(e.target.value)} required fullWidth type='email' label='email'> Name </TextField>
      <TextField value={password} onChange={(e) => setPassword(e.target.value)} required style={{marginTop: '10px'}} fullWidth type='password' label='password'> Password </TextField>
      <Button type='submit' style={{marginTop: '10px'}} variant='contained' color='primary'>Login</Button>
      <p>Don't have an account? <MaterialLink component={Link} to='/signUp'>Sign Up</MaterialLink></p>
    </form>
  )
}
