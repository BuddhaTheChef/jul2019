export const createProject = (project) => {
    return (dispatch, getState) => {
        //makee async call to database
        dispatch({type: 'CREATE_PROJECT', project})
    }
}