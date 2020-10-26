import { firebase } from '../firebase';

const addNewTask = (projectId, task, date) => {
    return firebase
        .firestore()
        .collection('tasks')
        .add({
            archived: false,
            projectId: projectId,
            task: task,
            date: date,
            userId: '1'
        });
}

const archiveTask = (id) => {
    return firebase
        .firestore()
        .collection('tasks')
        .doc(id)
        .update({
            archived: true
        });
}

export {
    addNewTask,
    archiveTask
}