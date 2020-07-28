import { ADD_ARTICLE, ADD_TAG, ADD_USER, USER_LOGGED_IN, USER_INFO_ADD, REMOVE_USER } from '../types/types'


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

export function addNewArticle(articleUrl, payload, history) {
    return function (dispatch) {
        fetch(articleUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Token ${localStorage.authToken}`,
            },
            body: JSON.stringify({ article: payload }),
        })
            .then((res) => {
                if (res.status === 200) {
                    history.push("/")
                    return res.json()
                }
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


export function setUserLogged(payload) {
    return {
        type: USER_LOGGED_IN,
        payload
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
            dispatch({ type: USER_INFO_ADD, payload: user })
            dispatch(setUserLogged(true))
        })
    }
}



export function removeUserInfo() {
    return {
        type: REMOVE_USER
    }
}

export function logoutUser(dispatch) {
    dispatch(setUserLogged(false))
    dispatch(removeUserInfo())
    localStorage.clear()
}