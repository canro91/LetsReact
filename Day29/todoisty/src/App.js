import React from 'react';
import Content from './components/layout/Content';
import Header from './components/layout/Header';
import { ProjectsProvider, SelectedProjectProvider } from './context';

function App({ darkModeDefault = false }) {
  const [darkMode, setDarkMode] = React.useState(darkModeDefault);

  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <main
          data-testid="application"
          className={darkMode ? 'darkmode' : undefined}
        >
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Content />
        </main>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
}

export default App;
