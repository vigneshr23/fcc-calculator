import React, { Fragment } from "react";

function Numberpad({ onClick }) {
  return (
    <Fragment>
      <a href="##" className="panel-block">
        <table className="table is-bordered">
          <tbody>
            <tr className="row">
              <td colSpan="2" align="center" id="clear" onClick={() => {}}>
                CE
              </td>
              <td align="center" id="" onClick={() => {}}>
                +/-
              </td>
              <td align="center" id="divide" onClick={() => {}}>
                <button className="button is-white">&divide;</button>
              </td>
            </tr>
            <tr className="row">
              <td align="center" id="seven" number={7} onClick={() => {}}>
                7
              </td>
              <td align="center" id="eight" number={8} onClick={() => {}}>
                8
              </td>
              <td align="center" id="nine" number={9} onClick={() => {}}>
                9
              </td>
              <td align="center" id="multiply" onClick={() => {}}>
                <button className="button is-white">&#215;</button>
              </td>
            </tr>
            <tr className="row">
              <td align="center" id="four" number={4} onClick={() => {}}>
                4
              </td>
              <td align="center" id="five" number={5} onClick={() => {}}>
                5
              </td>
              <td align="center" id="six" number={6} onClick={() => {}}>
                6
              </td>
              <td align="center" id="subtract" onClick={() => {}}>
                <button className="button is-white">-</button>
              </td>
            </tr>
            <tr className="row">
              <td align="center" id="one" number={1} onClick={() => {}}>
                1
              </td>
              <td align="center" id="two" number={2} onClick={() => {}}>
                2
              </td>
              <td align="center" id="three" number={3} onClick={() => {}}>
                3
              </td>
              <td align="center" id="add" onClick={() => {}}>
                <button className="button is-white">+</button>
              </td>
            </tr>
            <tr className="row">
              {/* <td align="center" id="" number={} onClick={}>+/-</td> */}
              <td
                align="center"
                colSpan="2"
                id="zero"
                number={0}
                onClick={(e) => console.log(e.target.getAttribute("number"))}
              >
                0
              </td>
              <td align="center" id="decimal" onClick={() => {}}>
                .
              </td>
              <td align="center" onClick={() => {}}>
                <button id="equals" className="button is-white">
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
