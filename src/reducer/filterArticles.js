import {FILTER_BY_TITLE, FILTER_BY_DATE} from '../constants'

const filters = {
    filterArticles: [],
    date: {
        from: null,
        to: null
    }
}

export default (state = filters, action) => {
    const { type, payload } = action

    switch (type) {
        case FILTER_BY_TITLE:
        case FILTER_BY_DATE:
            return Object.assign({}, state, payload);
    }

    return state
}