import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import Aboutme from "./Aboutme";
import Footer from "./Footer";
import Skills from "./Skills";
import Projects from "./Projects";
import Certificates from "./Certificates";

const Homepage = () => {
  return (
    <>
      <Projects />
      <div className="background-image"></div>
      <Aboutme />
      <Certificates />
      <Skills />

      <Fab color="primary" aria-label="up" id="backToTop"
        onClick={() => window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })}
      >
        <NavigationIcon />
      </Fab>

      <Footer />
    </>
  );
};

export default Homepage;
