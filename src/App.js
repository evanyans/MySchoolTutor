import Navigation from './components/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './components/Home';
import Browse from './components/Browse';
import History from './components/History';
import styled from 'styled-components';
function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Wrapper>
        <Routes>
          <Route exact path="/MySchoolTutor" element={<Navigate to="/MySchoolTutor/home" />} />
          <Route exact path="/MySchoolTutor/home" element={<Home />} />
          <Route exact path="/MySchoolTutor/browse" element={<Browse />} />
          <Route exact path="/MySchoolTutory/history"  element={<History />} />
        </Routes>
      </Wrapper>

      <footer>© Evan Yan 2022</footer>
    </BrowserRouter>
    
  );
}

export default App;

export const Wrapper = styled.div`
    scroll-behavior: smooth;
    margin: auto;
    margin-top:50px;
    width: 100%;
    max-width: 1299px;
`
