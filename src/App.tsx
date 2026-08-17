import { createTheme, ThemeProvider } from '@mui/material/styles';
import retroKiaFont from './resources/RetrokiaCapsRounded.ttf';

import Header from './components/Header';
import ProjectsPage from './components/Projects';
import AboutPage from './components/About';
import Timeline from './components/Timeline';
import Contact from './components/Contact';

const theme = createTheme({
  typography: {
    fontFamily: 'Retrokia, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@font-face': {
          fontFamily: 'Retrokia',
          src: `url(${retroKiaFont}) format('truetype')`,
          fontDisplay: 'swap',
        },
      },
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <main className="content">
          <div className="main">
            <AboutPage id="about" />
            <ProjectsPage id="projects" />
            <Timeline id="timeline" />
          </div>
          <Contact id="contact" />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;