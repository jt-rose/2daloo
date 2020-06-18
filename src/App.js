import React from 'react';
import { connect } from "react-redux";
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./Components/Header/Header.js"
//import NavBar from "./Components/Header/NavBar"
import { TaskList, TrashList } from "./Components/TaskList/listTemplate"
import { AddTask, EditTask } from "./Components/UpdateTask/updateTaskTemplate"
import addLater from "./Components/Settings"
import Login from "./Components/Login"
import Error404 from "./Components/Error404"

function App(props) {
  const currentTasks = props.tasks;
  // empty post provided when creating new posts
const emptyPost = {
  slug: "",
  title: "",
  content: "",
  tags: [],
  important: false
}

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={TaskList} />
        <Route exact path="/add" render={() => <AddTask task={emptyPost} />} />
        <Route path="/edit/:editSlug" render={(props) => {
            const task = currentTasks.find(x => x.slug === props.match.params.editSlug);
            if (task) {
              return <EditTask task={task} />
            } else {
              return <p>Whoops!</p>
            }
          }} />
        {/*<Route path="/edit/:editSlug" component={EditTask} />*/}
        <Route exact path="/settings" component={addLater} />
        <Route exact path="/trash" component={TrashList} />
        <Route exact path="/login" component={Login} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

const mapStateToProps = ({tasks, trash}) => ({tasks, trash});
export default connect(mapStateToProps, null)(App);
