import React from 'react';
import {Link} from "react-router-dom";
import darthvader from "../images/darthvader.gif"

const Home = () => {
  return (
    <div className="Home">
        <Link to="/nasafotka">May the force be with you!</Link>
        <div className='MolimTeRadi'>
        <img src={darthvader} className="photo" alt="" />
        </div>
    </div>
  )
}

export default Home