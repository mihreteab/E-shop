import React from 'react';
import '../css/bootstrap.min.css'
import '../css/headercss.css'

class HeaderComponent extends React.Component{
    render(){
        return(

<div className="container-fluid" id="bar">
<a href="/logo"><div id="logo"></div></a>
<a href="/icon"><div id="login_icon"></div></a>
<div id="menu">
    <ul>
  <li><a href="/shop">SHOP</a></li>
  <li><a href="/team">TEAM</a></li>
  <li><a href="/events">EVENTS</a></li>
  <li><a href="/experiance">EXPERIANCE</a></li>
  <li><a href="/company">COMPANY</a></li>
  <li><a href="/contact">CONTACT</a></li>
  </ul>
  </div>
</div>

        )
    }
}
export default HeaderComponent;