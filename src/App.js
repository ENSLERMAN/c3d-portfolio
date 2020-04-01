import React from 'react';

import Projects from "./Components/Projects/Projects";
import Jumbotron from "./Components/Jumbotron/Jumbotron";
import About from "./Components/About/About";

function App() {
  return (
    <div>
      <Jumbotron />
      <Projects />
      <About />
    </div>
  );
}

export default App;
