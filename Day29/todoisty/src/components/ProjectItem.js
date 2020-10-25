import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useProjectsValue, useSelectedProjectValue } from '../context';
import { deleteProject } from '../services/projects';

const ProjectItem = ({ project }) => {
    const [showConfirm, setShowConfirm] = React.useState(false);
    const { projects, setProjects } = useProjectsValue();
    const { setSelectedProject } = useSelectedProjectValue();

    const handleDeleteProject = (docId) => {
        deleteProject(docId)
            .then(() => {
                setProjects([...projects]);
                setSelectedProject('INBOX');
            });
    }

    return (
        <>
            <span className="sidebar__dot">•</span>
            <span className="sidebar__project-name">{project.name}</span>
            <span
                className="sidebar__project-delete"
                data-testid="delete-project"
                onClick={() => setShowConfirm(!showConfirm)}
            >
                <FaTrashAlt />
            </span>
            {showConfirm && (
                <div className="project-delete-modal">
                    <div className="project-delete-modal__inner">
                        <p>Are you sure you want to delete this project?</p>
                        <button
                            type="button"
                            onClick={() => handleDeleteProject(project.docId)}
                        >
                            Delete
                        </button>
                        <span onClick={() => setShowConfirm(!showConfirm)}>Cancel</span>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProjectItem;