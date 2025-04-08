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
            <div className="footer-cta-wrapper">
              <div className="footer-cta-heading-wrapper">
                <div className="footer-cta-heading-line">
                  <h3 className="heading-large is-mobile-small">Have something in mind?</h3>
                </div>
                <div className="footer-cta-heading-line">
                  <h3 className="heading-large is-mobile-small">let’s build it together.</h3>
                </div>
              </div>
              <a href="/contact" className="cta-button w-button">Get in touch</a>
            </div>
            <div className="footer-wrapper">
              <div>Build with 💖 by <a href="/" target="_blank" className="build-by-link"></a></div>
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