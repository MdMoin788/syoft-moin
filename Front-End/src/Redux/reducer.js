import { LOGIN, FALIURE, LOADING, SUCCESS, PRODUCTS } from './actionType';
const initState = {
    loading: false,
    success: false,
    failure: false,
    loginUser: null,
    products: []
};
export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case LOADING:
            return { ...state, loading: !state.loading };
        case SUCCESS:
            return { ...state, success: !state.success };
        case FALIURE:
            return { ...state, failure: !state.failure };
        case LOGIN:
            localStorage.setItem("profile", JSON.stringify(payload.data.token))
            localStorage.setItem("id", JSON.stringify(payload.data.user._id))
            return { ...state, loginUser: payload };
        case PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    }
};