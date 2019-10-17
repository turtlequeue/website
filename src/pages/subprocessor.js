import React from "react";
import styled from "styled-components";

const SubProcessor = styled.div`
  ${props => props.className} {
    background-color: white;
    width: auto;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  table {
    /* Remove spacing between table cells (from Normalize.css) */
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    border: 1px solid #cbcbcb;
  }

  table caption {
    color: #000;
    font: italic 85%/1 arial, sans-serif;
    padding: 1em 0;
    text-align: center;
  }

  table td,
  table th {
    border-left: 1px solid #cbcbcb; /*  inner column border */
    border-width: 0 0 0 1px;
    font-size: inherit;
    margin: 0;
    overflow: visible; /*to make ths where the title is really long work*/
    padding: 0.5em 1em; /* cell padding */
  }

  /* Consider removing this next declaration block, as it causes problems when
there's a rowspan on the first cell. Case added to the tests. issue#432 */
  table td:first-child,
  table th:first-child {
    border-left-width: 0;
  }

  table thead {
    background-color: #e0e0e0;
    color: #000;
    text-align: left;
    vertical-align: bottom;
  }

  /*
striping:
   even - #fff (white)
   odd  - #f2f2f2 (light gray)
*/
  table td {
    background-color: transparent;
  }
  table-odd td {
    background-color: #f2f2f2;
  }

  /* nth-child selector for modern browsers */
  table-striped tr:nth-child(2n-1) td {
    background-color: #f2f2f2;
  }

  /* BORDERED TABLES */
  table-bordered td {
    border-bottom: 1px solid #cbcbcb;
  }
  table-bordered tbody > tr:last-child > td {
    border-bottom-width: 0;
  }

  /* HORIZONTAL BORDERED TABLES */

  table-horizontal td,
  table-horizontal th {
    border-width: 0 0 1px 0;
    border-bottom: 1px solid #cbcbcb;
  }
  table-horizontal tbody > tr:last-child > td {
    border-bottom-width: 0;
  }
`;

export default () => (
  <SubProcessor>
    <table>
      <caption>List of subprocessors</caption>
      <thead>
        <tr>
          <th scope="col">Entity</th>
          <th scope="col">Name</th>
          <th scope="col">Entity country</th>
          <th scope="col">Location of data</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Hetzner</th>
          <td>Cloud Infrastructure Provider</td>
          <td>Germany</td>
          <td>Germany</td>
        </tr>
        <tr>
          <th scope="row">Crisp IM SARL</th>
          <td>In-browser Messaging Service</td>
          <td>France</td>
          <td>Netherlands & Germany</td>
        </tr>
      </tbody>
    </table>
  </SubProcessor>
);
