import {SHARED_CONSTANTS} from '../constants';
import {USER_CONSTANTS} from '../constants';

const initialState = {
    isLoggedIn: false,
    isPending: false,
    userInfo: {
        firstName: null,
        lastName: null
    }
};

export default function user(state = initialState, action) {
    const {type} = action;

    if (type === `${USER_CONSTANTS.LOG_IN}/${SHARED_CONSTANTS.REQUEST}`) {
        const {isPending} = action.payload;
        state = {...state, isPending};
    } else if (type === `${USER_CONSTANTS.LOG_IN}/${SHARED_CONSTANTS.SUCCESS}`) {
        const {firstName, lastName, isPending, isLoggedIn} = action.payload;
        state = {...state, userInfo: {firstName, lastName}, isPending, isLoggedIn}
    } else if (type === `${USER_CONSTANTS.LOG_IN}/${SHARED_CONSTANTS.FAILURE}`) {
        const {isPending} = action.payload;
        state = {...state, isPending};
    }

    return state;
}