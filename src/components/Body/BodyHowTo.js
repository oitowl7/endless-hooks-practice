import React from "react";

function BodyHowTo({ data }) {
  return (
    <div className="how-it-works-container">
      <h2 className="how-it-works-header">How It Works</h2>
      <div className="how-it-works-grid">
        {data && data.map((d, i) => {
          return(
            <div className="how-it-works-item" key={d.id}>
              <span className="how-it-works-item-header">{d.stepNumber < 10 ? `0${d.stepNumber}` : d.stepNumber}</span>
              <hr className="how-it-works-item-divider teal-color"></hr>
              <span className="how-it-works-item-title"><strong>{d.versionContent[0].title.toUpperCase()}</strong></span><br />
              <span className="how-it-works-item-body">{d.versionContent[0].body}</span>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default BodyHowTo;
