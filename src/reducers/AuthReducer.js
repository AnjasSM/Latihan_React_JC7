import {
    User_Login_Mantappu,
    User_Not_Found,
    Login_System_Error,
    Login_Loading,
    Logout
} from '../actions/types';

const Initial_State ={ username: '', error: '', loading: false};

export default (state = Initial_State, action) => {
    switch(action.type) {
        case User_Login_Mantappu :
            return { ...Initial_State, username: action.payload };
        case User_Not_Found :
            return { ...Initial_State, error: 'Invalid Username and Password' }
        case Login_System_Error :
            return { ...Initial_State, error: 'System Error' }
        case Login_Loading :
            return { ...Initial_State, loading: true }
        case Logout :
            return Initial_State;
        default :
            return state;
    }
}