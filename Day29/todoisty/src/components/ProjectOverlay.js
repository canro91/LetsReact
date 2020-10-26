import React from 'react';
import { useProjectsValue } from '../context';

const ProjectOverlay = ({
    setProject,
    showProjectOverlay,
    setShowProjectOverlay,
}) => {
    const { projects } = useProjectsValue();

    return (
        projects &&
        showProjectOverlay && (
            <div className="project-overlay" data-testid="project-overlay">
                <ul className="project-overlay__list">
                    {projects.map((project) => (
                        <li key={project.projectId}>
                            <div
                                data-testid="project-overlay-action"
                                onClick={() => {
                                    setProject(project.projectId);
                                    setShowProjectOverlay(false);
                                }}
                            >
                                {project.name}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    );
}

export default ProjectOverlay;