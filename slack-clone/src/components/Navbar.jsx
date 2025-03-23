const Navbar = () => {
  const navOptions = ["Product", "Enterprise", "Resources", "Pricing"];

  return (
    <nav className="py-3">
      <div className="d-flex justify-content-between flex-wrap">
        <div className="d-flex gap-4">
          <div>
            <a href="#">
              <img
                src="https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-black.png"
                alt="slack-logo"
              />
            </a>
          </div>

          {navOptions.map((option) => {
            if (option === "Product") {
              return (
                <div>
                  <a className="nav-links" href="#">
                    <span className="fw-bold">
                      {option} <i class="fa-solid fa-angle-down"></i>
                    </span>
                  </a>
                </div>
              );
            }
            return (
              <div>
                <a className="nav-links" href="#">
                  <span className="fw-bold">{option}</span>
                </a>
              </div>
            );
          })}
        </div>
        <div className="d-flex gap-4">
          <div>
            <span className="fw-bold"><i class="fa-solid fa-magnifying-glass"></i></span>
          </div>
          <div>
            <span className="nav-links fw-bold">Sign in</span>
          </div>
          <div>
            <button className="nav-btn-outline fw-bold py-1 px-2">TALK TO SALES</button>
          </div>
          <div>
            <button className="nav-btn-solid fw-bold py-1 px-2">TRY FOR FREE</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
