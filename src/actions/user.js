import {SHARED_CONSTANTS} from '../constants';
import {USER_CONSTANTS} from '../constants';

export const login = (dispatch) => async ({email, password}) => {
    try {
        dispatch({
            type: `${USER_CONSTANTS.LOG_IN}/${SHARED_CONSTANTS.REQUEST}`,
            payload: {isPending: true}
        });
        const {firstName, lastName} = await makeLoginRequestToBack(email, password);
        dispatch({
            type: `${USER_CONSTANTS.LOG_IN}/${SHARED_CONSTANTS.SUCCESS}`,
            payload: {firstName, lastName, isPending: false, isLoggedIn: true}
        });
    } catch (error) {
        dispatch({
            type: `${USER_CONSTANTS.LOG_IN}/${SHARED_CONSTANTS.FAILURE}`,
            payload: {isPending: false}
        });
    }
};

// TODO: substitute with a real call + implement user service

function makeLoginRequestToBack(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({firstName: 'Vasyl', lastName: 'Kharchenko'});
        }, 4000);
    });
}

export const userActions = {
    login
};