// Hero Section Component
const HeroSection = () => (
  <div className="main-wrapper">
    <div className="section-home-hero wf-section">
      <div className="hero-hero-layer"></div>
      <div className="marquee-wrapper"></div>
      <div className="page-padding">
        <div className="vertical-spacing hero">
          <div className="container">
            <div className="hero-section-wrapper">
              <div className="margin-bottom-24">
                <h1 className="heading-large text-color-black">Webflow Developer - UI/UX Designer - Web Designer</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// About Section Component
const AboutSection = () => (
  <div id="about" className="section-home-about wf-section">
    <div className="page-padding">
      <div className="vertical-spacing">
        <div className="container">
          <div className="about-wrapper">
            <div className="section-heading-wrapper">
              <h2 className="heading-medium">About</h2>
            </div>
            <div className="about-content-wrapper">
              <p className="paragraph-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Work Showcase Component
const WorkShowcase = () => (
  <div id="work" className="section-work wf-section">
    <div className="page-padding">
      <div className="vertical-spacing">
        <div className="container">
          <div className="work-wrapper">
            <div className="section-heading-wrapper">
              <h2 className="heading-medium">Recent Work</h2>
            </div>
            <div className="work-list">
              <a href="https://www.decodable.co/" target="_blank" className="work-item-component w-inline-block">
                <div className="work-item-content">
                  <div className="margin-bottom-16">
                    <h3 className="work-item-title">Decodable.co</h3>
                  </div>
                  <div className="work-item-tags-wrapper">
                    <div className="work-item-tag">Web Design</div>
                    <div className="work-item-tags-separator"></div>
                    <div className="work-item-tag">Webflow Development</div>
                  </div>
                </div>
                <div className="work-item-icon-wrapper">
                  <div className="work-item-color w-embed">
                    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.085 15.085V17.7437L25.6161 17.7531L14.1421 29.2271L16.0278 31.1127L27.5017 19.6387L27.5112 30.1699H30.1699V15.085H15.085Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </div>
              </a>
              {/* Repeat similar structure for other work items */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Testimonials Component
const Testimonials = () => (
  <div className="section-testimonial wf-section">
    <div className="page-padding">
      <div className="vertical-spacing is--bottom-large">
        <div className="container">
          <div className="testimonial-wrapper">
            <div className="section-heading-wrapper">
              <h2 className="heading-medium">Testimonials</h2>
            </div>
            <div className="testimonial-list">
              <div className="testimonial-item">
                <div className="bottom-margin-28">
                  <p className="paragraph-large">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.” 
                  </p>
                </div>
                <div className="testimonial-giver">
                  <div className="testimonial-avatar-wrapper">
                    <img src="" loading="lazy" alt="" className="testimonial-avatar-image" />
                  </div>
                  <div className="testimonial-giver-content">
                    <div className="test-weight-medium">Ayush Raj</div>
                    <div className="para-small">VP of Marketing &amp; @ Webflow</div>
                  </div>
                </div>
              </div>
              {/* Repeat similar structure for other testimonials */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

import Navbar from '../components/Navbar'; // Import Navbar component
import Footer from '../components/Footer'; // Import Footer component

const Home = () => (
  <div id="luxy" className="page-wrapper">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <WorkShowcase />
    <Testimonials />
    <Footer />
  </div>
);

export default Home;
