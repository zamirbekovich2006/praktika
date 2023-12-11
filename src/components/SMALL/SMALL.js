import React from "react";
import "./SMALL.css";
import emblemm from "../img/g10.png"
import logo from "../img/logo.png"

const SMALL =()=>{
    return(
        <div className="small_container">
             <div className="SMALL">
            <img className="small_foto" src={logo} alt="" srcset="" />
             <img className="small_foto" src={emblemm} alt="" srcset="" />
          <p className="text_small"><b>Лицензия              Политика конфиденциальности</b></p>
          </div>
           <div className="small_div">CD PROJEKT®, Cyberpunk®, Cyberpunk 2077®</div>

       <div className="foto_foto">
             <div className="eldan">
             <div>
                <div className="foto9"></div><br/>
                <div className="foto10"></div>
                </div>
                <div> <div className="foto11"></div></div>
             </div>
        </div>
       
     </div>
         
    )
}
export default SMALL;