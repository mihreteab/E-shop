// import React, { Component } from 'react';
import React from 'react';
import '../css/bootstrap.min.css'
import '../css/footercss.css'
class FooterComponent extends React.Component{
    render(){
        return(
            <div id="footers">
                <div className="container" id="rows">
                    <div className="items" id="product">
                        <h5>PRODUCTS</h5>
                        <ul>
                            <li>Men</li>
                            <li>Women</li>
                            <li>Youth</li>
                        </ul>
                    </div>
                    <div className="items">
                        <h5>ABOUT</h5>
                        <ul>
                            <li>Careers and internships</li>
                            <li>Sponsership</li>
                            <li>Teams</li>
                            <li>Catalogue request</li>
                        </ul>
                    </div>
                    <div className="items">
                        <h5>CUSTOMER SUPPORT</h5>
                        <ul>
                            <li>Contact us</li>
                            <li>Shipping and Order tracking</li>
                            <li>Easy returns</li>
                            <li>Warranty</li>
                            <li>Replacement Binding parts</li>

                        </ul>
                    </div>
                    <div className="items">
                        <h5>NEWSLETTER</h5>
                        <input type="text"/>
                        <button>GO</button>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default FooterComponent;