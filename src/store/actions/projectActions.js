export const createProject = (project) => {
    return (dispatch, getState,getFirebase ) => {
        //make async call to database
        const firestore = getFirebase().firestore();
        const profile = getState().firebase.profile;
        const authorID = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorID,
            createdAt: new Date()
        }).then(()=>{
            dispatch({type:'CREATE_PROJECT', project:project});
        }).catch((err)=>{
            dispatch({type:'CREATE_PROJECT_ERROR', err})
        })
    }
};