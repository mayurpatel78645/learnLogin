import React, { useState } from 'react';
import TextField  from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button/Button';
import MaterialLink from '@material-ui/core/Link/Link';
import { Link, useHistory } from 'react-router-dom';

export default function SignUp() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSignUp = async(e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      setError('Password did not match');
      return;
    }

    const response = fetch(`http://localhost:5000/users`,{
      method: 'POST',
      headers: {
        'Content-Type' : "application/json"
      },
      body: JSON.stringify({email: email, password: password}),
    });

    //const user = await response.json();
    history.push('/');
  }

  return (
    <form onSubmit={handleSignUp} >
      <TextField 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
        required 
        fullWidth 
        type='email' 
        label='email'
      > Name 
      </TextField>

      <TextField onChange={(e) => setPassword(e.target.value)} value={password} required style={{marginTop: '10px'}} fullWidth type='password' label='password'> Password </TextField>

      <TextField 
        error={error.length >0} 
        onChange={(e) => {
          setPasswordConfirm(e.target.value)
          setError('')}} 
        helperText={error} 
        value={passwordConfirm} 
        required style={{marginTop: '10px'}} 
        fullWidth type='password' 
        label='password confirm'
      > Password 
      </TextField>

      <Button type='submit' style={{marginTop: '10px'}} variant='contained' color='primary'>Sign Up</Button>
      
      <p>Already have an account? <MaterialLink component={Link} to='/login'>Login</MaterialLink></p>
    </form>
  )
}
