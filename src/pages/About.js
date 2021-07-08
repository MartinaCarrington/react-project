import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Tina's Pizzera. is a Brownsville BKLYN corporation, having been incorporated in June 2021, 
          primarily for the purpose of selling pizza, salads, submarine sandwiches, and various other 
          food products, as a licensed franchisee under the franchise name of "Mama's Pizza." The company
          presently maintains an office in Brownsville Brooklyn,NY. The president and principal shareholder
          of the company is Martin Carrington

        </p>
      </div>
    </div>
  );
}

export default About;