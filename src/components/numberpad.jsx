import React, { Fragment } from "react";

function Numberpad({
  handleDecimal,
  handleEvaluate,
  handleNumbers,
  handleOperators,
  initialize,
}) {
  return (
    <Fragment>
      <a href="#" className="panel-block">
        <table className="table is-bordered">
          <tbody>
            <tr className="row">
              <td colSpan="2" align="center" id="clear" className="cell danger" onClick={initialize}>
                CE
              </td>
              <td align="center" id="" onClick={() => {}}>
                +/-
              </td>
              <td align="center" id="divide" className="cell light-wheat" onClick={handleOperators}>
                <button className="button inherit">&divide;</button>
              </td>
            </tr>
            <tr className="row">
              <td align="center" id="seven" number={7} onClick={handleNumbers}>
                7
              </td>
              <td align="center" id="eight" number={8} onClick={handleNumbers}>
                8
              </td>
              <td align="center" id="nine" number={9} onClick={handleNumbers}>
                9
              </td>
              <td align="center" id="multiply" className="cell light-wheat" onClick={handleOperators}>
                <button className="button inherit">&#215;</button>
              </td>
            </tr>
            <tr className="row">
              <td align="center" id="four" number={4} onClick={handleNumbers}>
                4
              </td>
              <td align="center" id="five" number={5} onClick={handleNumbers}>
                5
              </td>
              <td align="center" id="six" number={6} onClick={handleNumbers}>
                6
              </td>
              <td align="center" id="subtract" className="cell light-wheat" onClick={handleOperators}>
                <button className="button inherit">-</button>
              </td>
            </tr>
            <tr className="row">
              <td align="center" id="one" number={1} onClick={handleNumbers}>
                1
              </td>
              <td align="center" id="two" number={2} onClick={handleNumbers}>
                2
              </td>
              <td align="center" id="three" number={3} onClick={handleNumbers}>
                3
              </td>
              <td align="center" id="add" className="cell light-wheat" onClick={handleOperators}>
                <button className="button inherit">+</button>
              </td>
            </tr>
            <tr className="row">
              {/* <td align="center" id="" number={} onClick={}>+/-</td> */}
              <td
                align="center"
                colSpan="2"
                id="zero"
                number={0}
                onClick={handleNumbers}
              >
                0
              </td>
              <td
                align="center"
                id="handleDecimal"
                number={"."}
                onClick={handleDecimal}
                id="decimal"
              >
                .
              </td>
              <td align="center" className="cell light-blue" onClick={handleEvaluate}>
                <button id="equals" className="button inherit">
                  =
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </a>
    </Fragment>
  );
}
export default Numberpad;
