import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './Components/Header';
import {
  TaskList,
  TrashList
} from './Components/TaskList/listTemplate';
import {
  AddTask,
  EditTask
} from './Components/UpdateTask/updateTaskTemplate';
import TagEditor from './Components/TagEditor';
import Login from './Components/Login';
import SignUp from './Components/Login/SignUp';
import Error404 from './Components/Error404';

// create wrapper to verify signed in before rendering component
// or redirecting to login page
const PrivateRouteUC = ({
  component: Component,
  loggedIn,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

const mapLoginToProps = ({ loggedIn }) => ({ loggedIn });
const PrivateRoute = connect(mapLoginToProps, null)(PrivateRouteUC);

function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <Switch>
        <PrivateRoute exact path="/" component={TaskList} />
        <PrivateRoute exact path="/add" component={AddTask} />
        <PrivateRoute path="/edit/:editSlug" component={EditTask} />
        <PrivateRoute exact path="/tags" component={TagEditor} />
        <PrivateRoute exact path="/trash" component={TrashList} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/forgot-password" component={SignUp} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

const mapStateToProps = ({ tasks, trash }) => ({ tasks, trash });
export default connect(mapStateToProps, null)(App);
