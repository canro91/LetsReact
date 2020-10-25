import React from 'react';
import { useProjectsValue, useSelectedProjectValue } from '../context';
import ProjectItem from './ProjectItem';

const ProjectList = ({ activeValue = null }) => {
    const [active, setActive] = React.useState(activeValue);
    const { setSelectedProject } = useSelectedProjectValue();
    const { projects } = useProjectsValue();

    return (
        projects
            && projects.map(project => (
                <li
                    key={project.docId}
                    data-doc-id={project.docId}
                    data-testid="project-action"
                    className={
                        active === project.docId
                            ? 'active sidebar__project'
                            : 'sidebar__project'
                    }
                    onKeyDown={() => {
                        setActive(project.projectId);
                        setSelectedProject(project.projectId);
                    }}
                    onClick={() => {
                        setActive(project.projectId);
                        setSelectedProject(project.projectId);
                    }}
                >
                    <ProjectItem project={project} />
                </li>
            ))
    );
}

export default ProjectList;