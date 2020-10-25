import { collatedTasks } from '../constants';

const collatedTasksExist = selectedProject =>
  collatedTasks.find(task => task.key === selectedProject);

const getProject = (projects, projectId) =>
  projects.find(project => project.projectId === projectId);

const getCollatedProject = (projects, key) =>
  projects.find(project => project.key === key);

export {
  collatedTasksExist,
  getProject,
  getCollatedProject
}