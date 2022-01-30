import WelcomeImage from "../assets/welcome.jpg";

export function Welcome() {
  const style = {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    flexWrap: "wrap",
    border:"12px solid white"
  };
  const imageStyle = {
    objectFit: "fill",
    width: "100%",
  };
  return (
    <div style={style}>

      <h1>ADD UPDATE AADHAR DETAILS</h1>
      {/* <img style={imageStyle} src={WelcomeImage} alt="" /> */}
    </div>
  );
}
