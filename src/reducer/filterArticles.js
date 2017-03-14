import {FILTER_BY_TITLE, FILTER_BY_DATE} from '../constants'

const filterState = {
    filterArticles: [],
    date: {
        from: null,
        to: null
    }
}

export default (state = filterState, action) => {
    const { type, payload } = action

    switch (type) {
        case FILTER_BY_TITLE:
            return Object.assign({}, state, payload);

        case FILTER_BY_DATE:
            console.log(state)
            return state
    }

    return state
}