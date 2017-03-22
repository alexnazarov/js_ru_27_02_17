import {normalizedComments} from '../fixtures'
import {ADD_COMMENT} from '../constants'

export default (comments = normalizedComments, action) => {
    const { type, payload } = action

    switch (type) {
        case ADD_COMMENT:
            const {commentData, id} = payload;
            const {user, text} = commentData;

            return comments.concat({
                user,
                text,
                id
            })
    }

    return comments
}