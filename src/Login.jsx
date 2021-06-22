import React from 'react';
import TextField  from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button/Button';
import MaterialLink from '@material-ui/core/Link/Link';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <form>
      <TextField required fullWidth type='email' label='email'> Name </TextField>
      <TextField required style={{marginTop: '10px'}} fullWidth type='password' label='password'> Password </TextField>
      <Button style={{marginTop: '10px'}} variant='contained' color='primary'>Login</Button>
      <p>Don't have an account? <MaterialLink component={Link} to='/signUp'>Sign Up</MaterialLink></p>
    </form>
  )
}
