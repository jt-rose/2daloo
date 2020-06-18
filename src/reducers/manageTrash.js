import { 
    UPDATE_TRASH,
    REMOVE_TRASH,
    SORT_TRASH_ABC,
    SORT_TRASH_ABC_REVERSE,
    SORT_TRASH_DATE,
    SORT_TRASH_DATE_REVERSE 
} from "../actions";
import * as R from "ramda";

const manageTrash = (state=[], action) => {
    switch (action.type) {
        case UPDATE_TRASH:
            return state.concat(action.task);
        case REMOVE_TRASH:
            return state.filter(x => x.slug !== action.slug);
        case SORT_TRASH_ABC:
            return R.sort((a, b) => a.title.localeCompare(b.title), state);
        case SORT_TRASH_ABC_REVERSE:
            return R.sort((a, b) => b.title.localeCompare(a.title), state);
        case SORT_TRASH_DATE:
            return R.sort((a, b) => a.created - b.created, state);
        case SORT_TRASH_DATE_REVERSE:
            return R.sort((a, b) => b.created - a.created, state);
        default:
            return state;
    };
}

export default manageTrash;