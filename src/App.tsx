import { CssBaseline, ThemeProvider } from "@mui/material";
import type { PaletteMode } from "@mui/material";
import { useMemo, useState } from "react";

import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import { createAppTheme } from "./theme";

const getInitialMode = (): PaletteMode => {
  const savedMode = localStorage.getItem("colour-mode");
  if (savedMode === "light" || savedMode === "dark") return savedMode;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const App = () => {
  const [mode, setMode] = useState<PaletteMode>(getInitialMode);
  const theme = useMemo(() => createAppTheme(mode), [mode]);

  const toggleMode = () => {
    setMode((currentMode) => {
      const nextMode = currentMode === "light" ? "dark" : "light";
      localStorage.setItem("colour-mode", nextMode);
      return nextMode;
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header mode={mode} onToggleMode={toggleMode} />
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
