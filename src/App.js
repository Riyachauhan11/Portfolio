import "./App.css";
import useScrollAnimation from "./hooks/useScrollAnimation";

// pages
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import Event from "./components/event/Event";
import Contact from "./components/contact/Contact";

function App() {
  useScrollAnimation(); // triggers animations for titles

  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Resume />
        <Projects />
        <Event />
        <Contact />
      </main>
    </>
  );
}

export default App;
