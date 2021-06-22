import React from 'react';
import TextField  from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button/Button';
import MaterialLink from '@material-ui/core/Link/Link';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <form>
      <TextField required fullWidth type='email' label='email'> Name </TextField>
      <TextField required style={{marginTop: '10px'}} fullWidth type='password' label='password'> Password </TextField>
      <TextField required style={{marginTop: '10px'}} fullWidth type='password' label='password confirm'> Password </TextField>

      <Button style={{marginTop: '10px'}} variant='contained' color='primary'>Sign Up</Button>
      <p>Already have an account? <MaterialLink component={Link} to='/login'>Login</MaterialLink></p>
    </form>
  )
}
