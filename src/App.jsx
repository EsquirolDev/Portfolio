import { useState } from 'react'

const NAME = "Sergi Coll Pastor"

export default function App() {
    return (
      <>
      <header>
        <a href="https://github.com/EsquirolDev">@EsquirolDev</a>

      <div className="principal-content">
        <a href="#">Inici</a>
        <a href="#">Sobre mi</a>
        <a href="#">Projectes</a>
        <a href="#">Contacte</a>
      </div>
      </header>

    <main>
      <h1>{NAME}</h1>
      <p>Estudiant de 1r de DAW <b>Sant Josep Obrer</b> </p>
    </main>


    <footer>

      <div className="footer-content">

      <p>Landing Page</p>
      <ul>
        <li><a href="#">Inici</a></li>
        <li><a href="#">Sobre mi</a></li>
        <li><a href="#">Projectes</a></li>
        <li><a href="#">Contacte</a></li>
      </ul>


      </div>

      <p>© 2026 Sergi Coll Pastor</p>
    </footer>
    </>
  )
}
