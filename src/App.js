import React from 'react';
import { connect } from "react-redux";
import './App.css';
import { Switch, Route } from "react-router-dom";

import Header from "./Components/Header";
import { TaskList, TrashList } from "./Components/TaskList/listTemplate";
import { AddTask, EditTask } from "./Components/UpdateTask/updateTaskTemplate"
import TagEditor from "./Components/TagEditor/TagEditor";
import Login from "./Components/Login";
import SignUp from "./Components/Login/SignUp";
import Error404 from "./Components/Error404";

function App(props) {
  return (
    <div className="App">
      <Header />
      <br />
      <Switch>
        <Route exact path="/" component={TaskList} />
        <Route exact path="/add" component={AddTask} />
        <Route path="/edit/:editSlug" component={EditTask} />
        <Route exact path="/settings" component={TagEditor} />
        <Route exact path="/trash" component={TrashList} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/forgot-password" component={SignUp/*change later*/} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
};

const mapStateToProps = ({tasks, trash}) => ({tasks, trash});
export default connect(mapStateToProps, null)(App);
