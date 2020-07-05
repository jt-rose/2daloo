import manageTasks from "./manageTasks";
import manageTrash from "./manageTrash";
import manageTags from "./manageTags";
import filterImportant from "./filterImportant";
import filterTags from "./filterTags";
import showTags from "./showTags";
import loggedIn from "./manageLogin";

import { combineReducers } from "redux";

export default combineReducers({
    tasks: manageTasks,
    trash: manageTrash,
    tags: manageTags,
    filterImportant,
    filterTags,
    showTags,
    loggedIn
});