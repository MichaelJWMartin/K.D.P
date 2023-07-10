import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles/global';
import { theme } from './GlobalStyles/theme';
import { Main, ProjectUXDesign, CCLProjectCatalogue } from './Containers';
import { ScrollToTop } from './Utils/ScrollToTop';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Router>
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Main />}/>
              <Route path="/UXDesign" element={<ProjectUXDesign />}/>
              <Route path="/CCL_ProductCatalogue" element={<CCLProjectCatalogue />}/>
            </Routes>
          </ScrollToTop>
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
