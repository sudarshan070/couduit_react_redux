import { createStore, applyMiddleware } from 'redux'
import { ADD_ARTICLE, ADD_TAG, USER_LOGGED_IN, USER_INFO_ADD } from '../types/types'


const initialState = {
    articles: [],
    tags: [],
    isLoggedIn: false,
    userInfo: {}
}

function reducer(state = initialState, action) {

    switch (action.type) {
        case ADD_ARTICLE:
            return {
                ...state,
                articles: action.payload
            }
        case ADD_TAG:
            return {
                ...state,
                tags: action.payload
            }
        case USER_LOGGED_IN:
            return {
                ...state,
                isLoggedIn: action.payload
            }
        case USER_INFO_ADD:
            return {
                ...state,
                userInfo: action.payload
            }
        default:
            return state
    }
}


let thunk = (store) => next => action => {
    if (typeof action === "function") {
        return action(store.dispatch)
    }
    return next(action)
}



export let store = createStore(reducer, applyMiddleware(thunk))