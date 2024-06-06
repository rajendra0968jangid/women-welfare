import Contact from "./Main/Contact";
import About from "./Main/About";
import Blog from "./Main/Blog";
import Portfolio from "./Main/Portfolio";
import Service from "./Main/Service";
import Testimonials from "./Main/Testimonials";
function Main() {
  return (
    <>
      <main id="main">
        {/* ======= About Section ======= */}
        <About />
        {/* End About Section */}
        {/* ======= Services Section ======= */}
        <Service />
        {/* End Services Section */}
        {/* ======= Portfolio Section ======= */}
        <Portfolio />
        {/* End Portfolio Section */}
        {/* ======= Testimonials Section ======= */}
        <Testimonials />
        {/* End Testimonials Section */}
        {/* ======= Blog Section ======= */}
        <Blog />
        {/* End Blog Section */}
        {/* ======= Contact Section ======= */}
        <Contact />
        {/* End Contact Section */}
      </main>
    </>
  );
}

export default Main;
