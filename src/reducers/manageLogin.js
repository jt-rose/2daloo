import { TOGGLE_LOGIN } from "../actions";


const loggedIn = (state=false, action) => {
    switch(action.type) {
        case TOGGLE_LOGIN:
            return !state;
        default:
            return state;
    }
}

export default loggedIn;