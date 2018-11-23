import axios from 'axios';

export const onUserLogin = ({ username, password }) => {
    // var { username,password} = userdata;
    
    return {
        type: 'User_Login_Mantappu',
        payload: username
    }
}

//distruction bisa ditaroh diatas