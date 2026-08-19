import { CssBaseline, ThemeProvider } from "@mui/material";

import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import { theme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header />
        <main>
          <About id="about" />
          <Projects id="projects" />
          <Timeline id="experience" />
        </main>
        <Contact id="contact" />
      </div>
    </ThemeProvider>
  );
};

export default App;
