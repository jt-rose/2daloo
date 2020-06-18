import manageTasks from "./manageTasks";
import manageTrash from "./manageTrash";
import { combineReducers } from "redux";

export default combineReducers({
    tasks: manageTasks,
    trash: manageTrash
});