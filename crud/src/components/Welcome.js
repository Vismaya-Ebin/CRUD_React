import WelcomeImage from "../assets/welcome.jpg";

export function Welcome() {
  const style = {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    flexWrap: "wrap",
  };
  const imageStyle = {
    objectFit: "fill",
    width: "100%",
  };
  return (
    <div style={style}>
      <img style={imageStyle} src={WelcomeImage} alt="" />
    </div>
  );
}
