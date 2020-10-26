import React from 'react';
import { archiveTask } from '../services/tasks';

const Checkbox = ({ id }) => {

    const handleArchiveTask = () => {
        archiveTask(id);
    }

    return (
        <div
            className="checkbox-holder"
            data-testid="checkbox-action"
            onClick={() => handleArchiveTask()}
        >
            <span className="checkbox" />
        </div>
    );
}

export default Checkbox;