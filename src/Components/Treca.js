import React from 'react';
import {Link} from 'react-router-dom';
import Slika from '../keanusuperboy.jpg';
//30.3.2020 datum   11:40 sat
function Treca() {
    return (
      <form>
        <label>
          Ime:
          <input type="text" name="Name"></input>
        </label><br></br>
        <label>
          Prezime:
          <input type="text" name="Prezime"></input>
        </label><br></br>
        <label>
          Lozinka:
          <input type="password" name="Password "></input>
        </label><br></br>
        <label>
          Jesi li robot:
          <input type="checkbox"></input>
        </label><br></br>
        <select>
          <option value="grapefruit">Grapefruit</option>
          <option value="jabuka">jabuka</option>
          <option value="kruska">kruska</option>
        </select><br></br>
          <input type="submit" name="Submit"></input>
      </form>
    );
  }

export default Treca;