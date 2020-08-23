import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="App-header">
      <h1>Back End Assessment 200823</h1>
      <Link to="/">Home</Link> | <Link to="/posts">Posts</Link>
    </header>
  )
}

export default Header;