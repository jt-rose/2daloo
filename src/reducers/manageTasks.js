import { 
    ADD_TASK, 
    EDIT_TASK, 
    REMOVE_TASK, 
    SORT_TASKS_ABC, 
    SORT_TASKS_ABC_REVERSE,
    SORT_TASKS_DATE,
    SORT_TASKS_DATE_REVERSE, 
    UPDATE_TASK
} from "../actions";
import * as R from "ramda";
/*
const immReverse = (arr, newArr=[]) => {
    if (arr.length === 0) {
        return newArr
    }; 
    return immReverse(arr.slice(1),[arr[0],...newArr]);
};
*/


const initialState = [
    {
        title: "Connect to Redux",
        content: "Use Redux to manage state decoupled from components, avoiding the need for prop drilling",
        created: new Date("2020-02-20T17:35:21.449Z"),
        slug: "connect-to-redux"
    },
    {
        title: "React-Router for SPA Views",
        content: "Use React-Router to intuitively design SPA views within a <Switch> component rendering",
        created: new Date("2020-02-20T17:37:46.248Z"),
        slug: "react-router-for-spa-views"
    },
    {
        title: "Sample 1",
        content: "Lorem ipsum blah blah blah",
        created: new Date("2020-02-24T17:37:46.248Z"),
        slug: "sample-1"
    },
    {
        title: "Sample 2",
        content: "Lorem ipsum blah blah blah",
        created: new Date("2020-02-28T17:37:46.248Z"),
        slug: "sample-2"
    },
    {
        title: "Sample 3",
        content: "Lorem ipsum blah blah blah",
        created: new Date("2020-02-29T17:37:46.248Z"),
        slug: "sample-3"
    }
];

const manageTasks = (state=initialState, action) => {
    switch(action.type) {
        case UPDATE_TASK:
            if (action.oldSlug) {
                const foundAt = state.findIndex(x => x.slug === action.oldSlug); // add check before dispatch for new title not in use
            return [...state.slice(0, foundAt), action.task, ...state.slice(foundAt+1)];// add error handling?
            }
            return state.concat(action.task); 
        case REMOVE_TASK:
            return state.filter(x => x.slug !== action.slug);
        case SORT_TASKS_ABC:
            return R.sort((a, b) => a.title.localeCompare(b.title), state);
        case SORT_TASKS_ABC_REVERSE:
            return R.sort((a, b) => b.title.localeCompare(a.title), state);
        case SORT_TASKS_DATE:
            return R.sort((a, b) => a.created - b.created, state);
        case SORT_TASKS_DATE_REVERSE:
            return R.sort((a, b) => b.created - a.created, state);
        default:
            return state;
    }
}

export default manageTasks;