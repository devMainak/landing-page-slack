import { useState } from "react";

const CookiePopup = () => {
  const [showCookiePopup, setShowCookiePopup] = useState(true);

  return (
    <>
      {showCookiePopup && (
        <div className="cookie-popup">
          <button
            className="btn-close"
            onClick={() => setShowCookiePopup(false)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <p>
            We use cookies to improve your experience. By continuing, you agree
            to our use of cookies.
          </p>
          <div className="d-flex gap-2">
            <button
              className="btn btn-primary w-100"
              onClick={() => setShowCookiePopup(false)}
            >
              Accept Cookies
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CookiePopup;
