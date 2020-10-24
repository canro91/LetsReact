import React, { useContext } from 'react';

export const SelectedProjectContext = React.createContext();

export const SelectedProjectProvider = ({ children }) => {
    const { selectedProject, setSelectedProject } = React.useState('INBOX');

    return (
        <SelectedProjectContext.Provider value={{ selectedProject, setSelectedProject }}>
            {children}
        </SelectedProjectContext.Provider>
    );
}

export const useSelectedProjectValue = () => useContext(SelectedProjectContext);