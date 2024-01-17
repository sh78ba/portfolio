import React from "react";
import '../src/App.css';
import Sidebar from "./components/sidebar/Sidebar";
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import Resume from "./components/resume/Resume";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
 

function App() {
  return (
    <React.Fragment>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
    </React.Fragment>
  );
}

export default App;
