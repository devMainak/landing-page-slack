import Navbar from "../components/Nav/Navbar";
import Alert from "../components/Alert";
import LogoList from "../components/LogoList";
import TryFreeBtn from "../components/Landing/TryFreeBtn";
import SignUpBtn from "../components/Landing/SignUpBtn";
import CookiePopup from "../components/CookiePopup";

const Landing = () => {
  return (
    <div className="app">
      <div className="container">
        <Navbar />
        <section>
          <Alert />
        </section>
        <section className="py-5">
          <div className="d-flex justify-content-between gap-3 flex-wrap">
            <div className="d-flex flex-column justify-content-between sec-layout">
              <div>
                <h4 className="display-4 fw-bold">
                  Slack is where the future works
                </h4>
                <p className="fw-semibold py-2">
                  Transform the way you work with one place for everyone and
                  everything you need to get stuff done.
                </p>
              </div>
              <div className="d-flex gap-2">
                <TryFreeBtn />
                <SignUpBtn />
              </div>
            </div>
            <div className="sec-layout">
              <img
                className="rounded img-fluid h-100 w-100 object-fit-cover"
                src="https://imgix.cosmicjs.com/99af4970-9616-11ea-b04e-734185112560-Screen-Shot-2020-05-14-at-12.08.37-PM.png"
                alt="Slack Preview"
              />
            </div>
          </div>
        </section>
        <section>
          <LogoList />
        </section>
        <section className="py-5">
          <div className="d-flex justify-content-between gap-3 w-100">
            <div className="sec-layout">
              <video
                className="rounded img-fluid h-100 w-100 object-fit-cover"
                controls
              >
                <source
                  src="https://a.slack-edge.com/0cedc3b/marketing/img/homepage/true-prospects/hero-revamp/animation/hero@2x.IN.webm"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="d-flex flex-column justify-content-between sec-layout">
              <div>
                <h6 className="display-6 fw-bold">
                  Now is your moment to build a better tomorrow
                </h6>
                <p className="fw-semibold py-2">
                  We've seen what the future can be. Now it's time to decide
                  what it will be.
                </p>
              </div>
              <button
                href="https://a.slack-edge.com/0cedc3b/marketing/img/homepage/true-prospects/hero-revamp/animation/hero@2x.IN.webm"
                className="fw-bold sec-btn-video py-2 px-3 w-100"
              >
                WATCH VIDEO
              </button>
            </div>
          </div>
        </section>
        <CookiePopup />
      </div>
    </div>
  );
};

export default Landing;
