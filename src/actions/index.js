import axios from 'axios';

export const onUserLogin = ({ username, password }) => {
    // var { username,password} = userdata;
    return (dispatch) => {
        axios.get('http://localhost:1997/users', {
            params: {
                username,
                password
            }
        }).then((res) => {
            if(res.data.length > 0) {
                    dispatch({ type: 'User_Login_Mantappu', payload: username })
            }
        }).catch((err) => {
            console.log(err)
        })
        
    }
}

//distruction bisa ditaroh diatas