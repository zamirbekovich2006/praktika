import React from "react";
import "./SECTION3.css";
import emblem from "../img/Group 236.png"

const SECTION3 =()=>{
    return(
        <div className="SECTION3">
          <div className="section3_img"></div>
          <div className="section3_text">
              <h1 className="section3_h1">Купить игру<br/> Cyberpunk 2077</h1><br/><br/>
              <ul className="section3_ul">
                <li className="next"><b>В комплект входит</b></li>
                <li><i class="fa-solid fa-compact-disc"></i>     Футляр с игровыми дисками</li>
                <li><i class="fa-solid fa-list"></i>             Футляр с кодом для загрузки игры и дисками (pc)</li>
                <li><i class="fa-solid fa-image"></i>              Справочник с информацией об игровом мире</li>
              </ul><br/><br/>
              
                 <img className="emblem" src={emblem} alt="" srcset="" />
          </div>

        </div>
    )
}
export default SECTION3;