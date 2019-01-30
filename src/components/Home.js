import React from 'react';
import {Link} from 'react-router-dom';

const Home = _ => {
  return (
    <div>
      <h1>Home</h1>
      <Link to={"/appointment"}>Select an appointment</Link>
    </div>
  )
}

export default Home;
