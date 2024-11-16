
import "./styles/styleNavBar.css"; // Add a CSS file for additional styling
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="folder-nav-horizontal">
      <Folder label="ENGAGE">
        <Link to="/engage1">Part 1</Link>
        <Link to="/engage2">Part 2</Link>
      </Folder>
      <Folder label="EXPLORE">
        <Link to="/explore">Explore Activities</Link>
      </Folder>
      <Folder label="EXPLAIN">
        <Link to="/explain">Explain Concepts</Link>
      </Folder>
      <Folder label="EXTEND">
        <Link to="/extend">Extend Learning</Link>
      </Folder>
      <Folder label="EVALUATE">
        <Link to="/evaluate">Evaluation Tools</Link>
      </Folder>
      <Folder label="REFERENCES">
        <Link to="/references">Citations & Resources</Link>
      </Folder>
    </nav>
  );
}


function Folder({ label, children }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(children);
  

  return (
    <div
      className="folder"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="folder-label">
        <span className="folder-icon">{isOpen ? "📂" : "📁"}</span>
        {label}
      </div>
      {isOpen && <div className="folder-contents">{children}</div>}
    </div>
  );
}
