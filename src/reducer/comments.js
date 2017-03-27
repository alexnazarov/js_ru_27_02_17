import {normalizedComments} from '../fixtures'
import { ADD_COMMENT, LOAD_COMMENTS_BY_ID, START, SUCCESS, FAIL } from '../constants'
import {arrToMap} from './utils'
import {Record, Map} from 'immutable'

const CommentModel = Record({
    id: null,
    user: '',
    text: ''
})

const DefaultReducerState = Record({
    entities: new Map({})
})

export default (comments = new DefaultReducerState(), action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return comments.setIn(['entities', randomId], new CommentModel({
                id: randomId,
                ...payload.comment
            }))

        case LOAD_COMMENTS_BY_ID + SUCCESS:
            return comments
                .mergeIn(['entities'], arrToMap(payload.response, CommentModel))
    }

    return comments
}