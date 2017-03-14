import {combineReducers} from 'redux'
import articleReducer from './articles'
import counterReducer from './counter'
import filterArticlesReducer from './filterArticles'

export default combineReducers({
    articles: articleReducer,
    count: counterReducer,
    filters: filterArticlesReducer
})