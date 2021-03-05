import React, { Component } from "react";

import geah_estetica_cover from "../images/cover/geah_estetica_cover.png"




class Estetica extends Component {
    render() {
      return (

<div className="container" style={{marginTop:"60px"}}>

<div class="columns">
  <div class="column is-full">
    <section class="hero is-full">
  <div class="hero-body">
  <figure className="image   " >
  <img alt="four women in bikini "  className="" src={geah_estetica_cover} />
  </figure>
  <h1 className="title pb-4">
  <strong>
  Ponemos a tu disposición productos para el cuidado de tu salud e imagen. Brindamos cursos en salud, estéticos y servicios de cuidado personal. Garantizamos el mejor cuidado de tu imagen y salud
    </strong>
    </h1>
    <p class="subtitle">
    <ul  >
  <li >  - Limpiezas faciales</li>
  <li >- Megadosis de vitamina C endovenosa</li>
  <li >- Mesoterapia- reducción de papada y cachetes</li>
  <li >- Reductores y reafirmantes</li>
  <li >- Carboxiterapia y drenaje linfático</li>
  <li >- Levantamiento de glúteos mas reafirmantes con peptonas y vitamina C
</li>
  <li >- Peptonas en piernas,pantorrillas, brazos y pectorales.
</li>
  <li >- Taller de inyectoterapia ( Sin conocimientos previos)
</li>
  <li >- Taller de inyectables básico aplicados a la estética
</li>
</ul>
    </p>
  </div>
</section>
</div>
  </div>
</div>


      );
    }
  }

  export default Estetica;