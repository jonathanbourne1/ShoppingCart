import React from 'react';

const Hero = () => {
     return ( 
          <div className="Hero">
          <div className="container">
               <div className="row">
                    <div className="contenido-hero">
                         <h2>Aprende algo nuevo</h2>
                        <p> Todos los cursos a $15 </p>
               <div className="form-group  col-sm-5 col-lg-12 ">
                    <input type="text" className="form-control buscador" placeholder="Que quieres aprender?"/>
                    <input type="submit" className="submit-buscador"/>
                  </div>
                  </div>
               </div>
               </div>
               </div>

         
          

      );
}
 
export default Hero;