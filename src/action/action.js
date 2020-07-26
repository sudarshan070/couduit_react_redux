import { ADD_ARTICLE, ADD_TAG } from '../types/types'


export function addArticle(payload) {
    return {
        type: ADD_ARTICLE,
        payload
        // payload:payload.action
    }
}

export function fetchArticle(url) {
    return function (dispatch) {
        fetch(url)
            .then((res) => res.json())
            .then(({ articles }) => {
                console.log(articles, 'here we egt')
                dispatch(addArticle(articles))
            })
    }
    // return {
    //     type: 'fetch',
    //     fallback: addArticle,
    //     url
    // }
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
    // return {
    //     type: 'fetch',
    //     fallback: addTag,
    //     url
    // }
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
            history.push('/')
        }
    }
}