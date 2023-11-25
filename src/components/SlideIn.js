import "./SlideIn.css";

const SlideIn = ({ children, startAnimation }) => {
  const transtionProperties = startAnimation ? { marginTop: "5px" } : {};
  return (
    <div className="SlideIn" style={transtionProperties}>
      {children}
    </div>
  );
};
export default SlideIn;
