import { 
    UPDATE_TAG,
    REMOVE_TAG
} from "../actions";

const initialState = [
    {
        name: "redux",
        description: "state management tools",
        color: "red"
    },
    {
        name: "UI-library",
        description: "UI Components out of the box",
        color: "blue"
    }
];

const manageTags = (state=initialState, action) => {
    switch(action.type) {
        case UPDATE_TAG:
            if (action.oldName) {
                const foundAt = state.findIndex(x => x.slug === action.oldName);
            return [...state.slice(0, foundAt), action.tag, ...state.slice(foundAt+1)];
            }
            return state.concat(action.category); 
        case REMOVE_TAG:
            return state.filter(x => x.name !== action.tag.name);
        default:
            return state;
    }
}

export default manageTags;