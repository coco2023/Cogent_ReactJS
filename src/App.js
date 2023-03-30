import './App.css';

import Home from './Home/home';
import About from './About/about';
import Policy from './Policy/policy';
import Suggestion from './Suggestion/suggestion';
import Header from './Header/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Header></Header>
    <Routes>
    <Route path="" element={<Home />} />
    <Route path="Home" element={<Home />} />
    <Route path="About" element={<About />} />
    <Route path="Policy" element={<Policy />} />
    <Route path="Suggestion" element={<Suggestion />} />
    <Route path="*" element={<Home />} />

    </Routes>
  </Router>

  );
}

export default App;
