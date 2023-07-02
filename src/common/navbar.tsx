import React from 'react'

function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Model viewer</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title d-block" id="offcanvasNavbarLabel">Hi There!</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div>
  <button type="button" className="btn btn-outline-primary btn-lg" style={{marginLeft: '10px'}}>Hope you are enjoying!!</button>
</div>
    </div>
  </div>
</nav>
  )
}

export default Navbar