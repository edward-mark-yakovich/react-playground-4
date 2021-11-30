interface loginState {
    username: string;
    password: string;
    loading: boolean;
    error: string;
    loggedIn: boolean;
    variant: 'login' | 'password';
}
  
type loginAction = 
    | {type: 'login' | 'success' | 'error' | 'logout'}
    | {type: 'field'; fieldName: string, payload: string }

export const initialLoginState: loginState = {
    username: '',
    password: '',
    loading: false,
    error: '',
    loggedIn: false,
    variant: 'login'
};

export const loginReducer = (state: loginState, action: loginAction) => {
    switch (action.type) {
        case "field":
            return {
                ...state,
                [action.fieldName!]: action.payload
            };
        case "login":
            return {
                ...state,
                loading: true,
                error: '',
                loggedIn: false
            };
        case "success":
            return {
                ...state,
                loading: false,
                error: '',
                loggedIn: true
            };
        case "error":
            return {
                ...state,
                loading: false,
                error: 'Incorrect User or Pass.',
                loggedIn: false,
                username: '',
                password: ''
            };
        case "logout":
            return {
                ...state,
                loading: false,
                error: '',
                loggedIn: false,
                username: '',
                password: ''
            };
        default:
            return state;
    }
}