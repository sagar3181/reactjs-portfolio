import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import Home from "./components/home";
import About from "./components/About";
import CertificateSlideshow from "./components/CertificateSlideshow";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact"
function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <SocialLinks/>
      <About/>
      <CertificateSlideshow/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
