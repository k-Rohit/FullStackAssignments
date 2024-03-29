// // App.jsx

// import React from 'react';
// import Navbar from './components/Navbar/Navbar';
// // import Home from './components/Home/Home';
// // import Signup from './components/Signup/Signup';

// function App() {
//   return (
//       <Navbar />
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;

