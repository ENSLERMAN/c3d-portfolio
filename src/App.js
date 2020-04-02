import React from 'react';

import Projects from "./Components/Projects/Projects";
import Jumbotron from "./Components/Jumbotron/Jumbotron";
import About from "./Components/About/About";
import Contacts from "./Components/Contacts/Contacts"
import Footer from "./Components/Footer"

function App() {
  return (
    <div>
      <Jumbotron />
      <Projects />
      <About />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
