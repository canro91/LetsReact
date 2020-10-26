import { firebase } from '../firebase';

const addNewTask = (projectId, task, date) => {
    return firebase
        .firestore()
        .collection('tasks')
        .add({
            archive: false,
            projectId: projectId,
            task: task,
            date: date,
            userId: '1'
        });
}

export {
    addNewTask
}