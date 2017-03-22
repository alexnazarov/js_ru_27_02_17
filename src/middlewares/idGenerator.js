import { ADD_COMMENT } from '../constants'

export default store => next => action => {
    const { type, payload } = action

    switch(type) {
        case ADD_COMMENT:
            const commentsArray = store.getState().comments
            const lastCommentId = commentsArray[commentsArray.length-1].id;

            next({
                ...action,
                payload: {
                    ...action.payload,
                    id: lastCommentId + 1
                }
            })
            break;

        default:
            next(action);
    }
}