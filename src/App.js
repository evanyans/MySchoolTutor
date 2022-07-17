import Navigation from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './components/Home';
import Browse from './components/Browse';
import History from './components/History';
import styled from 'styled-components';
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navigation />

      <Wrapper>
        <Routes>
          <Route exact path="/MySchoolTutor" element={<Navigate to="/home" />} />
          <Route path="/MySchoolTutor/home" element={<Home />} />
          <Route path="/MySchoolTutor/browse" element={<Browse />} />
          <Route path="/MySchoolTutor/history"  element={<History />} />
        </Routes>
      </Wrapper>

      <footer>© Evan Yan 2022</footer>
    </Router>
    
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
