import axios from 'axios'
import { FALIURE, LOADING, LOGIN, PRODUCTS, SUCCESS } from './actionType';
// ----------------------------Register-------------------------------
export const Registers = (user) => (dispatch) => {
    try {
        axios.post("http://localhost:5000/register", user).then((user) => {
           console.log('user post', user);
           alert("Register Succesfully")
        }).catch((error) => {
            console.log('error', error);
        })
    } catch (error) {
        console.log('error', error);
    }
}
// ----------------------------Login-------------------------------
export const Logins = (user) => (dispatch) => {
    dispatch(Loading())
    try {
        axios.post("http://localhost:5000/login", user).then((user) => {
            console.log('user login', user.data.token);
            
            dispatch(Succes())
            dispatch({ type: LOGIN, payload: user })
        }).catch((error) => {
            console.log('error', error);
            dispatch(Failure())
        })
    } catch (error) {
        console.log('error', error);
    }
}
// ----------------------------Api Products Creating -------------------------------
export const CreateProductApi = (products) => (dispatch) => {
    try {
        axios.post("http://localhost:5000/products", products).then((product) => {
            console.log('product create', product);
            dispatch({ type: PRODUCTS, payload: product.data })
            GetApiProducts()
        }).catch((error) => {
            console.log('error', error);
        })
    } catch (error) {
        console.log('error', error);
    }
}

// ----------------------------Api Products Fetching -------------------------------

 export const GetApiProducts = () => (dispatch) => {
    console.log("moin get")
    try {
        axios.get("http://localhost:5000/products").then((product) => {
            console.log('product get', product.data);
            dispatch({ type: PRODUCTS, payload: product.data })
        })
    } catch (error) {
        console.log('error', error);
    }
}
// ---------------------------- Status Toggle -------------------------------
const Loading = () => {
    return {
        type: LOADING
    };
};
const Succes = () => {
    return {
        type: SUCCESS
    };
};
const Failure = () => {
    return {
        type: FALIURE
    };
};