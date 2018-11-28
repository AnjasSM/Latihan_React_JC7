import axios from 'axios';
import {
    User_Login_Mantappu,
    User_Not_Found,
    Login_System_Error,
    Login_Loading,
    Register_Loading,
    Logout
} from './types'

export const onUserRegister = ({ username, password, email, phone }) => {
    return (dispatch) => {
        dispatch({ type: Register_Loading })
        axios.post('http://localhost:1996/users', {
            username, password, email, phone
        }).then((res) => {
            console.log(res)
            dispatch({ type: User_Login_Mantappu, payload: res.data.username })
        }).catch((err) => {
            console.log(err);
        })
    }
}

export const onUserLogOut =() => {
    return { type: Logout}
}

export const keepLogin = (username) => {
    return { type: User_Login_Mantappu, payload: username}
}

export const onUserLogin = ({ username, password }) => {
    // var { username,password} = userdata;
    return (dispatch) => {
        dispatch({ type: Login_Loading})
        axios.get('http://localhost:1997/users', {
            params: {
                username,
                password
            }
        }).then((res) => {
            if(res.data.length > 0) {
                    dispatch({ type: User_Login_Mantappu, payload: username })
            } else {
                dispatch({ type: User_Not_Found })
            }
        }).catch((err) => {
            console.log(err)
                dispatch({ type: Login_System_Error})
        })
        
    }
}

//distruction bisa ditaroh diatas