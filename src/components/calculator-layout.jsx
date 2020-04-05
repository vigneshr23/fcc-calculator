import React, { Fragment, useState } from "react";
import Numberpad from "./numberpad";

function CalculatorLayout() {
  const [result, setResult] = useState(0);
  //const []
  return (
    <Fragment>
      <div className="result" id="result">
        <h2 className="title">Result</h2>
      </div>
      <section className="section layout">
        <div className="container">
          <nav className="panel">
            <p className="panel-heading is-active">Calculator</p>
            <Numberpad />
          </nav>
        </div>
      </section>
    </Fragment>
  );
}

export default CalculatorLayout;
