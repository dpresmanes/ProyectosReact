import React from 'react';
import Typed from "react-typed"

const Header = () => {
    return (
        <div className = "header-wraper">
            <div className = "main-info">
                <h1> Desarrollador Web </h1>

                      <Typed
                      className= "typed-text"
                      strings= {["Web design","Web development","SEO","HTML5","CSS","JavaScript","React","Bootstrap","Node-js"]}
                      typeSpeed= {40}
                      backSpeed= {60}

                      />
                <a href= "#" className= "btn-main-offer">contact me</a>     
            </div>       
        </div>
    )
}

export default Header;
