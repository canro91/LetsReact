import React from 'react';
import { FaRegPaperPlane, FaSpaceShuttle, FaSun } from 'react-icons/fa';
import { today, tomorrow, addDays } from './helpers/date';

const TaskDate = ({ setTaskDate, showTaskDate, setShowTaskDate }) => {
    return (
        showTaskDate && (
            <div className="task-date" data-testid="task-date-overlay">
                <ul className="task-date__list">
                    <li>
                        <div
                            onClick={() => {
                                setShowTaskDate(false);
                                setTaskDate(today());
                            }}
                            data-testid="task-date-today"
                        >
                            <span>
                                <FaSpaceShuttle />
                            </span>
                            <span>Today</span>
                        </div>
                    </li>
                    <li>
                        <div
                            onClick={() => {
                                setShowTaskDate(false);
                                setTaskDate(tomorrow());
                            }}
                            data-testid="task-date-tomorrow"
                        >
                            <span>
                                <FaSun />
                            </span>
                            <span>Tomorrow</span>
                        </div>
                    </li>
                    <li>
                        <div
                            onClick={() => {
                                setShowTaskDate(false);
                                setTaskDate(addDays(today(), 7));
                            }}
                            data-testid="task-date-next-week"
                        >
                            <span>
                                <FaRegPaperPlane />
                            </span>
                            <span>Next week</span>
                        </div>
                    </li>
                </ul>
            </div>
        )
    );
}

export default TaskDate;