const element = (
  // Write your code here.
  <div className="container">
    <h1 className="head">Congratulations</h1>
    <div className="sm-container">
      <img
        className="profile-pic"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h1>Kiran V</h1>
      <p>vishnu institute of technology </p>
      <img
        className="watch"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
