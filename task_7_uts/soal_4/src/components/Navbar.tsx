// Navbar Component
const Navbar = () => (
    <div className="navbar">
      <div className="page-padding">
        <div className="container _100">
          <div className="nav-wrapper">
            <a href="/" aria-current="page" className="nav-logo-wrapper w-inline-block w--current">
              <div>@Abdur Rozaq</div>
            </a>
            <div className="nav-link-wrapper">
              <a href="/#about" className="nav-link">About</a>
              <a href="/#work" className="nav-link">Work</a>
              <a href="/contact" className="nav-link">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

export default Navbar;