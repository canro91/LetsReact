import React from 'react';
import Sidebar from './Sidebar';
import TaskList from '../TaskList';

const Content = () => {
    return (
        <section className="content">
            <Sidebar />
            <TaskList />
        </section>
    );
}

export default Content;