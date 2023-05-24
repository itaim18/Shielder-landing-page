import text from "./assets/text.png";
import logo from "../src/assets/logo.png";
import "./App.css";
import "./App.css";

const App = () => {
  return (
    <>
      <a href="https://expo.dev/artifacts/eas/7QHdiS8C7uUVTPM7Js5fNJ.apk">
        <img
          src={logo}
          alt="logo"
          style={{ width: "180px", marginBottom: "24px" }}
        />
      </a>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          src={text}
          alt="logo"
          style={{ width: "240px", marginBottom: "12px" }}
        />
        <a
          href="https://expo.dev/artifacts/eas/7QHdiS8C7uUVTPM7Js5fNJ.apk"
          className="btn btn-custom btn-lg page-scroll"
          style={{
            alignSelf: "center",
          }}
        >
          <button style={{ background: "#3180BF" }}>להתקנת האפליקציה</button>
        </a>
        <a
          href="https://www.youtube.com/watch?v=48D5hHv0MlU&ab_channel=Unishield"
          className="btn btn-custom btn-lg page-scroll"
          style={{
            alignSelf: "center",
            textDecoration: "underline",
            marginTop: "12px",
          }}
          rel="noreferrer"
          target="_blank"
        >
          אודות
        </a>
      </div>
    </>
  );
};

export default App;
