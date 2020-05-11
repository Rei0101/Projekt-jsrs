import React from 'react';
import {Link} from 'react-router-dom';
import Slika from '../keanu.jpg';


function Prva() {
  const poz="Evo neki tekst za prikazati";
    return (
      <div className="prva">
        <img src={Slika}></img><br></br>
        {poz}
        <table>
        <tr>
          <td>
            <Link className="link" to='/druga'>Na drugu stranicu</Link>
          </td>
          <td>
            <Link className="link" to='/treca'>Na trecu str</Link>
          </td>
        </tr>
        </table>
        <Nova value={poz}></Nova>
      </div>
    );
  }
function Nova(props){
  const novo="Evo nekog novog teksta za prikazati";
  return (
          <div>
            {props.value}
          </div>
    );
  }

  //moze se i ovako ovo gori
 /* function Nova({value}){
    const novo="Evo nekog novog teksta za prikazati";
    return (
            <div>
              {value}
            </div>
      );
    }*/
  export default Prva;