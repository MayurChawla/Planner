const initialState = {
    authError: null
}
const authReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log("Login Error");
            return {
                ...state,
                authError: 'Login Failed'
            };
        case 'LOGIN_SUCCESS':
            console.log("Login Success");
            return{
                ...state,
                authError: null
        };
        case 'SIGNOUT_SUCCESS':
            console.log("Signout_Success") ;
            return state;
        case 'SIGNUP_SUCCESS':
            console.log("SIGNUP SUCCESS");
            return {
                ...state,
                authError:null
            }
        case 'SIGNUP_ERROR':
            console.log("SIGNUP ERROR");
            return {
                ...state,
                authError: action.err.message
            }
        default :
            return state;
    }
}

export default authReducer;