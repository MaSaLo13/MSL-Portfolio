import React from 'react';
import '../../src/App.css';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
export default function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#about">Marvin Santiago Lopez</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <iconify-icon icon="akar-icons:three-line-horizontal"></iconify-icon>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item">
  <a
    href="#about"
    onClick={() => handlePageChange('About')}
    // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
  >
    About Me
  </a>
</li>
<li className="nav-item">
  <a
    href="#projects"
    onClick={() => handlePageChange('Projects')}
    // Check to see if the currentPage is `Projects`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
  >
    Projects
  </a>
</li>
<li className="nav-item">
  <a
    href="#resume"
    onClick={() => handlePageChange('Resume')}
    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
  >
    Resume
  </a>
</li>
      </ul>
    </div>
  </nav>
  );
}

/* <ul className="nav nav-tabs">
<li className="navbar-brand">Marvin Santiago Lopez</li>
<li className="nav-item">
  <a
    href="#about"
    onClick={() => handlePageChange('About')}
    // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
  >
    About Me
  </a>
</li>
<li className="nav-item">
  <a
    href="#projects"
    onClick={() => handlePageChange('Projects')}
    // Check to see if the currentPage is `Projects`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
  >
    Projects
  </a>
</li>
<li className="nav-item">
  <a
    href="#resume"
    onClick={() => handlePageChange('Resume')}
    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
  >
    Resume
  </a>
</li>
</ul> */