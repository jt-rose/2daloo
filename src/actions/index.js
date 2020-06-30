// Action Types

export const UPDATE_TASK = "UPDATE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
//export const ADD_CATEGORY = "ADD_CATEGORY";
//export const REMOVE_CATEGORY = "REMOVE_CATEGORY";
//export const SET_IMPORTANCE = "SET_IMPORTANCE";

export const SORT_TASKS_ABC = "SORT_TASKS_ABC";
export const SORT_TASKS_ABC_REVERSE = "SORT_TASKS_ABC_REVERSE";
export const SORT_TASKS_DATE = "SORT_TASKS_DATE";
export const SORT_TASKS_DATE_REVERSE = "SORT_TASKS_DATE_REVERSE";


export const UPDATE_TRASH = "UPDATE_TRASH";
export const REMOVE_TRASH = "REMOVE_TRASH";

export const SORT_TRASH_ABC = "SORT_TRASH_ABC";
export const SORT_TRASH_ABC_REVERSE = "SORT_TRASH_ABC_REVERSE";
export const SORT_TRASH_DATE = "SORT_TRASH_DATE";
export const SORT_TRASH_DATE_REVERSE = "SORT_TRASH_DATE_REVERSE";

export const UPDATE_TAG = "UPDATE_TAG";
export const REMOVE_TAG = "REMOVE_TAG";

export const TOGGLE_IMPORTANT = "TOGGLE_IMPORTANT";

export const TOGGLE_TAG_VISIBILITY = "TOGGLE_TAG_VISIBILITY";

export const TOGGLE_LOGIN = "TOGGLE_LOGIN";

// Action Creators

const actionTypeObj = typeDesc => ({type: typeDesc});
export const sortTasksABC = actionTypeObj(SORT_TASKS_ABC);
export const sortTasksABCReverse = actionTypeObj(SORT_TASKS_ABC_REVERSE);
export const sortTasksDate = actionTypeObj(SORT_TASKS_DATE);
export const sortTasksDateReverse = actionTypeObj(SORT_TASKS_DATE_REVERSE);

export const sortTrashABC = actionTypeObj(SORT_TRASH_ABC);
export const sortTrashABCReverse = actionTypeObj(SORT_TRASH_ABC_REVERSE);
export const sortTrashDate = actionTypeObj(SORT_TRASH_DATE);
export const sortTrashDateReverse = actionTypeObj(SORT_TRASH_DATE_REVERSE);

export const toggleImportant = actionTypeObj(TOGGLE_IMPORTANT);

export const toggleLogin = actionTypeObj(TOGGLE_LOGIN);

const createSlug = title => 
    title.trim()
    .toLowerCase()
    .replace(/,/g, "")
    .replace(/ /g, "-");

export const formatDate = (date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
};

// creates task object which is then passed to updateTask dispatch
export const createTask = (title, content, important, tags) => ({
        title,
        content,
        important,
        tags, 
        created: new Date(),
        slug: createSlug(title) // check for duplicates
});

// apply visibility filters to list of tasks
const applyImportantFilter = (tasks, onlyImportant) => {
    if (onlyImportant) {
        return tasks.filter(task => task.important)
    } else {
        return tasks;
    }
};

const applyTagFilter = (tasks, filteredTags) => {
    if (filteredTags.length === 0) {
        return tasks;
    } else {
        return tasks.filter(task => 
            task.tags.find(tagName => 
                filteredTags.includes(tagName)))
    }
};

export const filterVisibility = (tasks, onlyImportant, filteredTags) => 
    applyTagFilter(applyImportantFilter(tasks, onlyImportant), filteredTags);

export const updateTask = (newTask, oldSlug=null) => ({
    type: UPDATE_TASK,
    task: newTask,
    oldSlug
});


export const removeTask = (task) => ({
    type: REMOVE_TASK,
    task
});



export const updateTrash = (task) => ({
    type: UPDATE_TRASH,
    task
});

export const removeTrash = (task) => ({
    type: REMOVE_TRASH,
    task
});

export function moveToTrash(task) {
    return function(dispatch) {
        dispatch(removeTask(task));
        dispatch(updateTrash(task))
    }
};

export function restoreTrash(task) {
    return function(dispatch) {
        dispatch(removeTrash(task));
        dispatch(updateTask(task))
    }//check if new task created first
};


export const updateTag = (tag, oldName = null) => ({
    type: UPDATE_TAG,
    tag,
    oldName
});

export const removeTag = (tag) => ({
    type: REMOVE_TAG,
    tag
});

export const toggleTagVisibility = (tagName) => ({
    type: TOGGLE_TAG_VISIBILITY,
    tagName
});