import "./FloatText.scss";

function FloatText() {
  return (
    <div className="float_container">
      <svg viewBox="0 0 150 150" height="150">
        <path
          id="circle"
          stroke="none"
          fill="none"
          d="M0 75a60 60 0 1 0 150 0a60 60 0 1 0 -150 0z"
        />
        <text>
          <textPath href="#circle">
            台灣的未來，由您選擇 台灣的未來，由您選擇
          </textPath>
        </text>
      </svg>
      <p>Miao Li-Han © 2023 Copyright. All Rights Reserved</p>
    </div>
  );
}

export default FloatText;
