// Hero Section Component
const HeroSection = () => (
  <div className="main-wrapper">
    <div className="section-home-hero wf-section" style={{ 
      position: "relative",
      height: "90vh",
      backgroundColor: "#ebeae6",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    }}>
      <div className="hero-hero-layer"></div>
      <div className="marquee-wrapper"></div>
      
      {/* Background Image - Centered */}
      <div style={{ 
        position: "absolute",
        left: "0",
        top: "0",
        height: "100%",
        width: "100%",
        overflow: "hidden",
        zIndex: 1
      }}>
        <img 
          src="/src/assets/DSCF9205e.jpg" 
          alt="Profile" 
          style={{ 
            width: "100%", 
            height: "100%", 
            objectFit: "cover"
          }} 
        />
        {/* Overlay to help text visibility */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}></div>
      </div>
      
      {/* Text Overlay */}
      <div className="page-padding" style={{ 
        width: "100%", 
        zIndex: 2, 
        position: "relative",
        display: "flex",
        justifyContent: "center" 
      }}>
        <div className="vertical-spacing hero" style={{ width: "100%" }}>
          <div className="hero-section-wrapper" style={{ 
        position: "relative", 
        textAlign: "center",
        maxWidth: "1800px",
        margin: "0 auto"
          }}>
        <div className="margin-bottom-24">
          <h1 className="heading-large" style={{ 
            fontSize: "8.5rem", 
            lineHeight: "1.3", 
            color: "#ffffff",
            position: "relative",
            zIndex: 2,
            textShadow: "0 2px 4px rgba(0,0,0,0.3)"
          }}>
            Webflow Developer — UI/UX
          </h1>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
              <a
                href="https://www.decodable.co/"
                target="_blank"
                className="work-item-component w-inline-block"
              >
                <div className="work-item-content">
                  <div className="margin-bottom-16">
                    <h3 className="work-item-title">Decodable.co</h3>
                  </div>
                  <div className="work-item-tags-wrapper">
                  <div className="work-item-tag">Brand Design - Webflow Development - Web Design</div>
                  </div>
                </div>
                <div className="work-item-icon-wrapper">
                  <div className="work-item-color w-embed">
                    <svg
                      width="46"
                      height="46"
                      viewBox="0 0 46 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.085 15.085V17.7437L25.6161 17.7531L14.1421 29.2271L16.0278 31.1127L27.5017 19.6387L27.5112 30.1699H30.1699V15.085H15.085Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </a>
              <div className="work-item-separator" style={{ 
                width: "100%", 
                height: "2px", 
                backgroundColor: "#e4e4e4", 
                margin: "10px 0" 
              }}></div>
              <a
                href="https://www.decodable.co/"
                target="_blank"
                className="work-item-component w-inline-block"
              >
                <div className="work-item-content">
                  <div className="margin-bottom-16">
                    <h3 className="work-item-title">Gofirefly.io</h3>
                  </div>
                  <div className="work-item-tags-wrapper">
                    <div className="work-item-tag">Brand Design - Webflow Development - Web Design</div>
                  </div>
                </div>
                <div className="work-item-icon-wrapper" style={{ background: "grey" }}>
                  <div className="work-item-color w-embed">
                    <svg
                      width="46"
                      height="46"
                      viewBox="0 0 46 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.085 15.085V17.7437L25.6161 17.7531L14.1421 29.2271L16.0278 31.1127L27.5017 19.6387L27.5112 30.1699H30.1699V15.085H15.085Z"
                        fill="currentColor"
                      ></path>
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
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.”
                  </p>
                </div>
                <div
                  className="testimonial-giver"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <div
                    className="testimonial-avatar-wrapper"
                    style={{
                      width: "55px",
                      height: "55px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      marginRight: "20px",
                    }}
                  >
                    <img
                      src="/src/assets/profile.webp"
                      alt="Testimonial Avatar"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      className="testimonial-avatar-image"
                    />
                  </div>
                  <div className="testimonial-giver-content">
                    <div className="test-weight-medium">Ayush Raj</div>
                    <div className="para-small">
                      VP of Marketing &amp; @ Webflow
                    </div>
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

import Navbar from "../components/Navbar"; // Import Navbar component
import Footer from "../components/Footer"; // Import Footer component

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
