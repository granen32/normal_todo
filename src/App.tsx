import React from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from "./styles/theme";


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      
    </ThemeProvider>
  );
}

export default App;
