import {normalizedComments} from '../fixtures'
import {ADD_COMMENT} from '../constants'

export default (comments = normalizedComments, action) => {
    const { type, payload } = action

    switch (type) {
        case ADD_COMMENT:
            const {user, text, id} = payload;

            return comments.concat({
                user,
                text,
                id
            })
    }

    return comments
}