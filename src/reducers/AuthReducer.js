const Initial_State ='';

export default (state = Initial_State, action) => {
    switch(action.type) {
        case 'User_Login_Mantappu' :
            return action.payload;
        default :
            return state;
    }
}