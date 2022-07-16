import Navigation from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Browse from './components/Browse';
import History from './components/History';
import styled from 'styled-components';
function App() {
  return (
    <Router>
      <Navigation />
      <Wrapper>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Wrapper>


    </Router>
  );
}

export default App;

export const Wrapper = styled.div`

`