import { ADD_COMMENT } from '../constants'

export default store => next => action => {
    const { type, payload } = action

    switch(type) {
    //через мидлвары будет проходить каждый экшин, они должны быть максимально общими, завязывать на конкретные экшины - плохая практика
        case ADD_COMMENT:
            const commentsArray = store.getState().comments
            //очень плохая логика, никакой гарантии уникальности, он же не сортированый по id
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
