import Home from '@pages/Home';
import Login from '@pages/Login';
import NewBet from '@pages/NewBet';
import RegisterUser from '@pages/RegisterUser';
import ResetPassoword from '@pages/ResetPassword';
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Switch>
      <Route path="/" exact >
        <Login/>
      </Route>
      <Route path="/home">
        <Home/>
      </Route>
      <Route path="/new-bet">
        <NewBet/>
      </Route>
      <Route path="/reset-password">
        <ResetPassoword/>
      </Route>
      <Route path="/register">
        <RegisterUser/>
      </Route>

    </Switch>
  );
}

export default App;
