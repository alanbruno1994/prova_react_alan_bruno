import Home from "@pages/Home";
import Login from "@pages/Login";
import NewBet from "@pages/NewBet";
import RegisterUser from "@pages/RegisterUser";
import ResetPassoword from "@pages/ResetPassword";
import { Redirect, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { Suspense } from "react";
import BlackBackgound from "@components/SyledComponents/BlackBackground";
import CenterMsg from "@components/SyledComponents/CenterMsg";

function App() {
  const logged = useSelector((state: any) => state.login.logged);
  return (
    <Suspense
      fallback={
        <>
          <BlackBackgound intensity={0.5} />
          <CenterMsg>
            <div className="msg">Loading...</div>
          </CenterMsg>
        </>
      }
    >
      <Switch>
        <Route path="/" exact>
          {!logged && <Login />}
          {logged && <Redirect to="/home" />}
        </Route>
        <Route path="/home">
          {logged && <Home />}
          {!logged && <Redirect to="/" />}
        </Route>
        <Route path="/new-bet">
          {logged && <NewBet />}
          {!logged && <Redirect to="/" />}
        </Route>
        <Route path="/reset-password">
          <ResetPassoword />
        </Route>
        <Route path="/register">
          <RegisterUser />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Suspense>
  );
}

export default App;
