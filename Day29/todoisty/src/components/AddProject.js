import React from 'react';
import { useProjectsValue } from '../context';
import { firebase } from '../firebase';
import { generateId } from '../helpers';

const AddProject = ({ shouldShow = false }) => {
    const [show, setShow] = React.useState(shouldShow);
    const [projectName, setProjectName] = React.useState('');
    const { setProjects } = useProjectsValue();

    const addProject = () => (
        projectName
        && firebase
            .firestore()
            .collection('projects')
            .add({
                projectId: generateId(),
                name: projectName,
                userId: '1'
            })
            .then(() => {
                setProjects([]);
                setProjectName('');
                setShow(false);
            })
    );

    return (
        <div className="add-project" data-testid="add-project">
            {show && (
                <div className="add-project__input" data-testid="add-project-inner">
                    <input
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        className="add-project__name"
                        data-testid="project-name"
                        type="text"
                        placeholder="Name your project"
                    />
                    <button
                        className="add-project__submit"
                        type="button"
                        onClick={() => addProject()}
                        data-testid="add-project-submit"
                    >
                        Add Project
              </button>
                    <span
                        aria-label="Cancel adding project"
                        data-testid="hide-project-overlay"
                        className="add-project__cancel"
                        onClick={() => setShow(false)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') setShow(false);
                        }}
                        role="button"
                        tabIndex={0}
                    >
                        Cancel
              </span>
                </div>
            )}
            <span className="add-project__plus">+</span>
            <span
                aria-label="Add Project"
                data-testid="add-project-action"
                className="add-project__text"
                onClick={() => setShow(!show)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') setShow(!show);
                }}
                role="button"
                tabIndex={0}
            >
                Add Project
          </span>
        </div>
    );
}

export default AddProject;