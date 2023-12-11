import React from "react";
import Logo from "../img/logo.png"
import "./Nav.css"


const Nav =()=>{
    return(
        <div  className="navbar">
            <img width={296} height={74} src={Logo} alt="" />
            <ul className="nav_menu">
                <li><i class="fa-brands fa-youtube fa-2x"></i></li>
                <li><i class="fa-brands fa-vk fa-2x"></i></li>
                <li><i class="fa-brands fa-square-facebook fa-2x"></i></li>
                <li><i class="fa-brands fa-square-twitter fa-2x"></i></li>
                <li><i class="fa-brands fa-twitch fa-2x"></i></li>
                <li><i class="fa-brands fa-square-instagram fa-2x"></i></li>
             </ul>
         </div>
    )
}
export default Nav;