const element = (
  //   Write your code here.
  <div className="cricket-container">
    <h1 className="heading">Super Over League</h1>
    <div className="images-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/rcb-img.png"
        alt="RCBImage"
        className="logo"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/csk-img.png"
        alt="CSKImage"
        className="logo"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
