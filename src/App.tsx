import Home from '@pages/Home';
import Login from '@pages/Login';
import NewBet from '@pages/NewBet';
import RegisterUser from '@pages/RegisterUser';
import ResetPassoword from '@pages/ResetPassword';
import { Redirect, Route, Switch } from 'react-router-dom';
import {useSelector} from 'react-redux'

function App() {
  const state = useSelector((state:any)=>state.login)
  const logged = useSelector((state:any)=>state.login.logged)
  console.log(state)
  return (    
    <Switch>
      <Route path="/" exact >
        {!logged && <Login/>}
        {logged && <Redirect to="/home"/>}
      </Route>
      <Route path="/home">
        {logged &&  <Home/>}
        {!logged && <Redirect to="/"/>}      
      </Route>
      <Route path="/new-bet">
        {logged && <NewBet/>}
        {!logged && <Redirect to="/"/>}
      </Route>
      <Route path="/reset-password">
        <ResetPassoword/>
      </Route>
      <Route path="/register">
        <RegisterUser/>
      </Route>
      <Route path="*">
         <Redirect to="/"/>
      </Route>
    </Switch>
  );
}

export default App;
