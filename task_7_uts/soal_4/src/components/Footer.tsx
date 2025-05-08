const Footer = () => (
    <div className="section-footer wf-section">
      <div className="global-embed">
        <div className="w-embed">
          {/* CSS snippets can be moved to a CSS file */}
        </div>
      </div>
      <div className="page-padding">
        <div className="vertical-spacing is--bottom-small">
          <div className="container">
            {window.location.pathname !== '/contact' && (
              <div className="footer-cta-wrapper">
              <div className="footer-cta-heading-wrapper">
                <div className="footer-cta-heading-line">
                <h3 className="heading-large is-mobile-small">Have something in mind?</h3>
                </div>
                <div className="footer-cta-heading-line">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ 
                  width: "65px", 
                  height: "65px", 
                  borderRadius: "50%", 
                  overflow: "hidden",
                  marginRight: "20px"
                  }}>
                  <img 
                    src="/src/assets/profile.webp" 
                    alt="Profile" 
                    style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover" 
                    }} 
                  />
                  </div>
                  <h3 className="heading-large is-mobile-small">let's build it together.</h3>
                </div>
                </div>
              </div>
              <a href="/contact" className="cta-button w-button">Get in touch</a>
              </div>
            )}
            <div className="footer-wrapper">
              <div>Build with 💖 by Abdur<a href="/" target="_blank" className="build-by-link"></a></div>
              <div className="footer-links-wrapper">
                <a href="/" target="_blank" className="footer-link">Linkedin</a>
                <a href="/" className="footer-link">Call</a>
                <a href="/" target="_blank" className="footer-link">Twitter</a>
                <a href="/" target="_blank" className="footer-link">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  export default Footer;