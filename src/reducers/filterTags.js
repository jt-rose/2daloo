import { UPDATE_TAG_FILTER } from "../actions";


const filterTags = (state=[], action) => {
    switch(action.type) {
        case UPDATE_TAG_FILTER:
            const currentlyListed = state.find(x => x === action.tagName);
            if (currentlyListed) {
                return state.filter(x => x !== action.tagName)
            } else {
                return [...state, action.tagName];
            }
        default:
            return state;
    }
}

export default filterTags;