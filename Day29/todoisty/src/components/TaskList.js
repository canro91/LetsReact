import React from 'react';
import { useTasks } from '../hooks';
import Checkbox from './Checkbox';
import { useProjectsValue, useSelectedProjectValue } from '../context';
import { collatedTasksExist, getCollatedProject, getProject } from '../helpers';
import { collatedTasks } from '../constants';

const TaskList = () => {
    const { selectedProject } = useSelectedProjectValue();
    const { projects } = useProjectsValue();
    const { tasks } = useTasks(selectedProject);

    let projectName = '';
    if (projects && selectedProject && !collatedTasksExist(selectedProject)) {
        projectName = getProject(projects, selectedProject).name
    }
    if (collatedTasksExist(selectedProject) && selectedProject) {
        projectName = getCollatedProject(collatedTasks, selectedProject).name
    }

    React.useEffect(() => {
        document.title = `${projectName}: Todoisty`;
    }, []);

    return (
        <div className="tasks" data-testid="tasks">
            <h2 data-testid="project-name">{projectName}</h2>

            <ul className="tasks__list">
                {tasks.map(task => (
                    <li key={task.id}>
                        <Checkbox id={task.id} />
                        <span>{task.task}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;