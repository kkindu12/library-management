import React from "react";
import { Link } from "react-router-dom";

export default function Nav(){
  return (
    <nav className="app-nav" role="navigation">
      <div className="brand">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
        <span>Library Management</span>
      </div>

      <div className="links">
        <Link to="/">📚 Books</Link>
        <Link to="/add" className="btn">+ Add Book</Link>
      </div>
    </nav>
  );
}
