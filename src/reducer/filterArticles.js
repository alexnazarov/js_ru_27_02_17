import {FILTER_ARTICLE} from '../constants'

const filters = {
    //а здесь лучше просто id хранить, а не все что в Select приходит
    filteredArticles: [],
    date: {
        from: null,
        to: null
    }
}

export default (state = filters, action) => {
    const { type, payload } = action

    switch (type) {
        case FILTER_ARTICLE:
            return Object.assign({}, state, payload);
    }

    return state
}
