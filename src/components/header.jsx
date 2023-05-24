import logo from "../assets/logo.png";

export const Header = () => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <p>UniShield</p>
                <a href="https://expo.dev/artifacts/eas/7QHdiS8C7uUVTPM7Js5fNJ.apk">
                  <img src={logo} alt="logo" style={{}} />
                </a>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <a
                    href="https://expo.dev/artifacts/eas/7QHdiS8C7uUVTPM7Js5fNJ.apk"
                    className="btn btn-custom btn-lg page-scroll"
                    style={{
                      alignSelf: "center",
                    }}
                  >
                    לחץ להורדה
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
