import React from "react";
import { Link } from "react-router-dom";

export default function Nav(){
  return (
    <nav className="app-nav" role="navigation">
      <div className="brand">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M4 6h14v12H4z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        <div>
          <div style={{fontSize:14}}>Library</div>
          <div style={{fontSize:12,color:"var(--muted)"}}>Management — Creative</div>
        </div>
      </div>

      <div className="links">
        <Link to="/" className="small-muted">Books</Link>
        <Link to="/add" className="btn">Add Book</Link>
      </div>
    </nav>
  );
}
