import { firebase } from '../firebase';

const addNewTask = (project, task, date) => {
    return firebase
        .firestore()
        .collection('tasks')
        .add({
            archive: false,
            project: project,
            task: task,
            date: date,
            userId: '1'
        });
}

export {
    addNewTask
}