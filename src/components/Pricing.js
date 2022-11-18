import React from "react";
import { GiTakeMyMoney } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Button } from "./Button";

function Pricing() {
  return (
    <div>
      <div className="pricing_section">
        <div className="pricing_wrapper">
          <h1 className="pricing_heading">Pricing</h1>
          <div className="pricing_container">
            <Link to="/sign-up" className="pricing_container-card">
              <div className="pricing_container-cardInfo">
                <div className="icon">
                    <GiTakeMyMoney />
                </div>
                <h3>Starter Package</h3>
                <h4>$10.99</h4>
                <ul className="pricing_container-features">
                 <li>1000+ Downloads</li>   
                 <li>3% Discount</li>   
                 <li>Seasional Offer</li>   
                </ul>
                <Button buttonSize=''></Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
