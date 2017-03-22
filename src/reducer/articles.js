import {normalizedArticles} from '../fixtures'
import {DELETE_ARTICLE, ADD_COMMENT} from '../constants'

export default (state = normalizedArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return state.filter(article => article.id !== payload.id)
        case ADD_COMMENT:
            const index = state.findIndex(article => article.id === payload.articleId)
            const newState = state.slice()

            //здесь ты мутируешь стейт. Возвращаешь новый массив, но внутри меняешь объекты по ссылке
            newState[index].comments.push(payload.id);

            return newState
    }

    return state
}
