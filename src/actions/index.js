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

const createSlug = title => 
    title.trim()
    .toLowerCase()
    .replace(/ /g, "-");


export const createTask = (title, content,  /*category, importance*/) => ({
        title,
        content, 
        //category, 
        //importance,
        created: new Date(),
        slug: createSlug(title) // check for duplicates
})

export const updateTask = (newTask, oldSlug=null) => ({
    type: UPDATE_TASK,
    task: newTask,
    oldSlug
});


export const removeTask = (slug) => ({
    type: REMOVE_TASK,
    slug
});



export const updateTrash = (task) => ({
    type: UPDATE_TRASH,
    task
});

export const removeTrash = (slug) => ({
    type: REMOVE_TRASH,
    slug
});

export function moveToTrash(task) {
    return function(dispatch) {
        dispatch(removeTask(task.slug));
        dispatch(updateTrash(task))
    }
};

export function restoreTrash(task) {
    return function(dispatch) {
        dispatch(removeTrash(task.slug));
        dispatch(updateTask(task))
    }//check if new task created first
};