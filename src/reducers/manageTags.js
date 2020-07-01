import { 
    CREATE_TAG,
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
        case CREATE_TAG:
            return state.concat(action.tag); 
        case REMOVE_TAG:
            return state.filter(x => x.name !== action.tag.name);
        default:
            return state;
    }
}

export default manageTags;