import React from 'react';
import { firebase } from '../firebase';
import { collatedTasksExist } from '../helpers';
import { addDays, today, tomorrow } from '../helpers/date';

const useTasks = selectedProject => {
    const [tasks, setTasks] = React.useState([]);
    const [archivedTasks, setArchivedTasks] = React.useState([]);

    React.useEffect(() => {
        let unsubscribe = firebase
            .firestore()
            .collection('tasks')
            .where('userId', '==', '1');

        if (selectedProject && !collatedTasksExist(selectedProject))
            unsubscribe = unsubscribe.where('projectId', '==', selectedProject);

        if (selectedProject === 'TODAY') {
            unsubscribe = unsubscribe.where('date', '>=', today())
                                     .where('date', '<', tomorrow());
        }

        if (selectedProject === 'NEXT_7') {
            unsubscribe = unsubscribe.where('date', '>=', today())
                                     .where('date', '<', addDays(today(), 7));
        }

        if (selectedProject === 'INBOX' || selectedProject === 0)
            unsubscribe = unsubscribe.where('date', '==', '');

        unsubscribe = unsubscribe.onSnapshot(snapshot => {
            const newTasks = snapshot.docs.map(task => {
                const data = {
                    id: task.id,
                    ...task.data()
                };

                return data;
            });

            const tasks = newTasks.filter(task => task.archived !== true);
            setTasks(tasks);

            const archivedTasks = newTasks.filter(task => task.archived !== false);
            setArchivedTasks(archivedTasks);
        });

        return () => unsubscribe();

    }, [selectedProject]);

    return { tasks, archivedTasks };
}

const useProjects = () => {
    const [projects, setProjects] = React.useState([]);

    React.useEffect(() => {
        firebase
            .firestore()
            .collection('projects')
            .where('userId', '==', '1')
            .orderBy('projectId')
            .get()
            .then(snapshot => {
                const allProjects = snapshot.docs.map(project => ({
                    ...project.data(),
                    docId: project.id
                }));

                if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
                    setProjects(allProjects);
                }
            });
    }, [projects]);

    return { projects, setProjects };
}

export { useTasks, useProjects };