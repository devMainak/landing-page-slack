import { useState } from "react";

const Alert = () => {
  const [showAlert, setShowAlert] = useState(true);
  return (
    <>
      {showAlert && (
        <div className="alert-body py-4 px-4">
          <div className="d-flex justify-content-between">
            <div>
              <div>
                <strong>Slack is your digital HQ.</strong> Meet the new features
                keeping teams connected in a working-from-anywhere world.{" "}
                <strong>
                 <a className="alert-link"> Let's go <i class="fa-solid fa-arrow-right"></i> </a>
                </strong>
              </div>
            </div>
            <div>
              <div onClick={() => setShowAlert(false)}>
                <i className="fa-solid fa-xmark"></i>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
