import { firebase } from '../firebase';
import { generateId } from '../helpers';

const addNewProject = (projectName) => {
    return firebase
        .firestore()
        .collection('projects')
        .add({
            projectId: generateId(),
            name: projectName,
            userId: '1'
        });
}

const deleteProject = (docId) => {
    return firebase
        .firestore()
        .collection('projects')
        .doc(docId)
        .delete();
}

export {
    addNewProject,
    deleteProject
}