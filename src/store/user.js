import { createStore } from 'redux'
import { ADD_USER } from "../types/types"


const initialState = {
    user: {}
}

function userReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                articles: action.payload
            }

        default:
            return state
    }
}




export let store = createStore(userReducer)