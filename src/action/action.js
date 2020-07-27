import { ADD_ARTICLE, ADD_TAG, ADD_USER } from '../types/types'


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
            .then((res) => {
                if (res.status === 200) {
                    history.push("/");
                }
                return res.json();
            })
            .then(({ user }) => {
                localStorage.setItem("authToken", user.token);
                dispatch({ type: ADD_USER, payload: user })
            });
    }
}