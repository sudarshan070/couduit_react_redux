import { ADD_ARTICLE, ADD_TAG } from '../types/types'


export function addArticle(payload) {
    return {
        type: ADD_ARTICLE,
        payload: payload.articles
    }
}

export function fetchArticle(url) {
    // return function (dispatch) {
    //     fetch(url)
    //         .then((res) => res.json())
    //         .then(({ articles }) => dispatch(addArticle(articles)));
    // }
    return {
        type: 'fetch',
        fallback: addArticle,
        url
    }
}



export function addTag(payload) {
    return {
        type: ADD_TAG,
        payload: payload.tags
    }
}

export function fetchTag(url) {
    // return function (dispatch) {
    //     fetch(url)
    //         .then((res) => res.json())
    //         .then(({ tags }) => dispatch(addTag(tags)))
    // }
    return {
        type: 'fetch',
        fallback: addTag,
        url
    }
}
