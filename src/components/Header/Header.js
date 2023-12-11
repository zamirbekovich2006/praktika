import React from "react";
import "./Header.css"
import Nav from "../Nav/Nav";


const Header =()=>{
    return(
        <div className="header" >
           <div className="container"> 
           <div className="header_content">
               <div className="navbar_content">
                   <Nav/>
                </div>
                <div className="header_more">
                  <h1>Доступно на всех платформах</h1>
                  <button>Узнать больше</button>
                </div>
              </div>
            </div>
        </div>
    )
}
export default Header;