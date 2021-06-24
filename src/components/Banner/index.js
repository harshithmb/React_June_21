import React from "react";

const Banner = () => {
  return (
    <div className="jumbotron p-4">
      <h1 className="display-4">Hello, Ally IO!</h1>
      <p className="lead">This is our React Project</p>
      <hr className="my-4" />
      <p>
        It uses utility classNamees for typography and spacing to space content
        out within the larger container.
      </p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a>
      </p>
    </div>
  );
};

export default Banner;
