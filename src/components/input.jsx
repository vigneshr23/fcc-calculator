import React from "react";

export function InputBar({ formula }) {
  const [input, result] = formula.split("=");
  return (
    <div className="panel-block expression-bar">
      <code id="display">
        <span className={result && "small"}>{formula ? input : 0 }</span>
        <br />
        {result && <span>{result}</span>}
      </code>
    </div>
  );
}

{
  /* <span className={result && "small"}>{input}</span>
          <br />
          {result && <span>{result}</span>}
        </code>
      ) : (
        <code id="display">0</code>
      )} */
}
