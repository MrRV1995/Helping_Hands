import React from "react";
import letsplay from "../images/hhlogo.png";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
    

      <div class="container1 aboutus">
        <div class="row">
          <div class="col-md-12">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className="row">
                  
<div class="col d-flex justify-content-center">
                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-text">
                          <h2>Mission</h2>
                          <p><b>
                         Helping Hands Is Trying To FulFill Basic Necessity Of Needy People And Trying To Provide The Basic Needs of People.
                         </b></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="single-box">  
                        <div className="img-text">
                          <h2>Vision</h2>
                          <b><p>
                            Bridging The Proverty Gap For Better Tomorrow
                             Hunger Free India till 2030
                          </p></b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default AboutUs;
