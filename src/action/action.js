import { ADD_ARTICLE, ADD_TAG, ADD_USER, USER_LOGGED_IN, USER_INFO_ADD } from '../types/types'


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


export function fetchUser(url, payload, history) {
    return function (dispatch) {
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user: payload }),
        })
            .then((res) => res.json())
            .then(({ user }) => {
                if (user.token) {
                    localStorage.setItem("authToken", user.token);
                    history.push("/")
                }
                dispatch({ type: ADD_USER, payload: user })
            });
    }
}


export function fetchLoggedIn(url, token) {
    return function (dispatch) {
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                authorization: `Token ${token}`
            },
        }).then((res) => res.json()).then(({ user }) => {
            console.log(user, 'user logged is here')
            dispatch({ type: USER_INFO_ADD, payload: user })
            dispatch({ type: USER_LOGGED_IN, payload: true })
        })
    }
}