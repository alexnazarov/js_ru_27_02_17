import {INCREMENT, DELETE_ARTICLE, FILTER_BY_TITLE, FILTER_BY_DATE} from '../constants'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function filterArticlesByTitle(filterArticles) {
    return {
        type: FILTER_BY_TITLE,
        payload: { filterArticles }
    }
}

export function filterArticlesByDate(date) {
    return {
        type: FILTER_BY_DATE,
        payload: { date }
    }
}