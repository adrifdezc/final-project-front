import React from 'react'

function Landing({landingPage}) {
    return (
      <>
        {landingPage !== "landingPage" ? (
          <div className="landing"></div>
        ) : (
          <div className="landing2"></div>
        )}
      </>
    );
}

export default Landing
