import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import Header from './components/Header';
import ProjectsPage from './components/Projects';
import AboutPage from './components/About';
import Timeline from './components/Timeline';
import Contact from './components/Contact';

const theme = createTheme({
  palette: { background: { default: '#f7f5f1', paper: '#ffffff' }, text: { primary: '#171716', secondary: '#605e59' } },
  typography: { fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header />
        <main>
          <AboutPage id="about" />
          <ProjectsPage id="projects" />
          <Timeline id="experience" />
        </main>
        <Contact id="contact" />
      </div>
    </ThemeProvider>
  );
};

export default App;
