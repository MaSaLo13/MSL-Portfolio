import React from 'react';

export default function Footer() {

    return (<footer class="bg-dark text-center text-white">
    <div class="container p-4 pb-0">
      <section class="mb-4">
        <a class="btn btn-outline-light btn-floating m-1" href="https://linkedin.com/in/marvin-santiagolopez" role="button"
          ><i class="fab fa-linkedin-in"></i>
          </a>
        <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/MaSaLo13" role="button"
          ><i class="fab fa-github"></i>
          </a>
      </section>
    </div>
    <div class="text-center p-3">
      © 2020 Copyright:
      <a class="text-white" href="https://linkedin.com/in/marvin-santiagolopez">Marvin Inc.</a>
    </div>
  </footer>
);

}