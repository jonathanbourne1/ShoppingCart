import React from 'react'
import logo from '../img/logo.jpg'
import cart from '../img/cart.png'

const Header = ({title}) => {
     return (
           <header>
          <div className="row">
          <div className="col-lg-9 mt-1 py-5">
          <img src={logo} alt="Universidad" className="img-responsive"/> 
          </div>
          <ul>
          <li className="submenu">
          <div className=" cart col-lg-3 mt-10 py-5">
               <div className="row justify-content-center">
               <img src={cart} alt="carrito" className="img-responsive " />
               </div>
          <div className="carrito">
          <table className="lista-carrito ">
               <thead>
               <tr>
                <th>Imagen</th>
               <th>Nombre</th>
               <th>Precio</th>
                <th></th>
               </tr>
          </thead>
               <tbody></tbody>
          </table>
          <input type="submit" className=" py-2 mt-5 btn btn-warning btn-block" value='Vaciar Carrito'/>
          </div>
          </div>
          </li>
          </ul>


     </div>

     </header> );
}
 

export default Header;