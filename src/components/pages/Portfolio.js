import React from 'react';


export default function Portfolio() {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
      <img src="https://github.com/MaSaLo13/Weather-Dash/raw/main/assets/img/first.png" className="card-img-top" alt="Hollywood Sign on The Hill"/>
      <div className="card-body">
        <h5 className="card-title">Weather-Dash</h5>
        <p className="card-text">
          This is a longer card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://github.com/GSiggins/ingredients/raw/main/assets/images/landing.png" className="card-img-top" alt="Palm Springs Road"/>
      <div className="card-body">
        <h5 className="card-title">Chef Buddy</h5>
        <p className="card-text">
          This is a longer card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://github.com/oconnorjohnson/cream-finder/raw/main/public/images/logo.png" className="card-img-top" alt="Los Angeles Skyscrapers"/>
      <div className="card-body">
        <h5 className="card-title">Cream Finder</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        <a className="btn btn-outline-dark btn-floating m-1" href="https://github.com/oconnorjohnson/cream-finder" role="button"
        ><i className="fab fa-github"></i></a>
        <a className="btn btn-outline-dark btn-floating m-1" href="https://enthousiaste-monsieur-80020.herokuapp.com/" role="button"
        ><iconify-icon inline icon="simple-icons:heroku"></iconify-icon></a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" className="card-img-top" alt="Skyscrapers"/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a longer card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
  </div>
</div>
  );
}
