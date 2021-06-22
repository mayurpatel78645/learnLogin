import './App.css';
import Header from './Header';
import Container from '@material-ui/core/Container';
import Login from './Login';
import SignUp from './SignUp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [user, setUser] = useState();

  const currentUser = () => {
    setUser(user);
  }

  return (
    <>
      <Router>
        <Header />
        <Container maxWidth='sm'>
          <Switch>

            <Route exact path='/'>
              <h1>DashBoard</h1>
            </Route>

            <Route exact path='/login'>
              <h1>Login</h1>
              <Login currentUser={currentUser} />
            </Route>
            
            <Route exact path='/signUp'>
              <h1>Sign Up</h1>
              <SignUp />
            </Route>
            
          </Switch>   
        </Container>
      </Router>
    </>
  );
}

export default App;
