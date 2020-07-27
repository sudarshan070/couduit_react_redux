import { ADD_ARTICLE, ADD_TAG } from '../types/types'


export function addArticle(payload) {
    return {
        type: ADD_ARTICLE,
        payload
    }
}

export function fetchArticle(url) {
    return function (dispatch) {
        fetch(url)
            .then((res) => res.json())
            .then(({ articles }) => {
                dispatch(addArticle(articles))
            })
    }
}


export function addTag(payload) {
    return {
        type: ADD_TAG,
        payload
    }
}

export function fetchTag(url) {
    return function (dispatch) {
        fetch(url)
            .then((res) => res.json())
            .then(({ tags }) => {
                dispatch(addTag(tags))
            })
    }
}

export const registerUser = (credentials, history) => {
    console.log(credentials, history, "enter int")
    return async () => {
        const url = "https://conduit.productionready.io/api/users";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });
        const user = await response.json();
        const { user: { token }, } = user
        if (token) {
            localStorage.setItem('authToken', token);
            history.push('/login')
        }
    }
}

export const loginUser = (credentials, history) => {
    console.log(credentials, 'credentials')
    return async () => {
        const url = "https://conduit.productionready.io/api/users/login";
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
        })
        const user = await response.json();
        const { user: { token }, } = user
        console.log(token, 'token is here')
        if (token) {
            localStorage.setItem('authToken', token);
            history.push('/')
        }

    }
}