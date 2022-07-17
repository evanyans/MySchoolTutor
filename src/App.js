import Navigation from './components/Navbar';
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './components/Home';
import Browse from './components/Browse';
import History from './components/History';
import styled from 'styled-components';
function App() {
  return (
    <Router basename ="/">
      <Navigation />

      <Wrapper>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/browse" component={Browse}/>
          <Route path="/history"  component={History}/>
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
