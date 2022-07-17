import Navigation from './components/Navbar';
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './components/Home';
import Browse from './components/Browse';
import History from './components/History';
import styled from 'styled-components';
function App() {
  return (
    <HashRouter>
      <Navigation />

      <Wrapper>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Wrapper>

      <footer>© Evan Yan 2022</footer>
    </HashRouter>
    
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
