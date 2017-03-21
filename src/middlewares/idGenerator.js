export default store => next => action => {
    next({
        ...action,
        payload: {
            ...action.payload,
            id: Date.now()
        }
    })
}