import React from 'react';
import '../css/bootstrap.min.css'
import '../css/itemcss.css'
// import image1 from '../image/e1.jpg'

class ItemsComponent extends React.Component{
	// constructor(props){
		// super(props);
		// this.state = {test:43};
	// }
	state = {
		item_name:"alquam volutp",
		item_description:"Lorem ipsum consecture discripng",
		item_price: 12
	};	
    render(){
        return(
            <div id="eachItem">
				<div id="theimage" style={{ backgroundImage: `url(http://localhost:3001${this.props.item.imageurl})` }}>
					<button id="newbtn" className="btn-warning">NEW</button>
					<button id="salebtn" className="btn-danger">SALE!</button>
					
				</div>
				<div>
                	{/* <img src={image1} width="100%"/> */}
				</div>
				<div id="btmclass">
				<div>
					<h6>{this.props.item.item_name}</h6>
				</div>
				<div>
					<p>{this.props.item.description}</p>
				</div>
				<div>
					<h4>${this.props.item.item_price}</h4>
				</div>
				<div id="bottombtns">
					<button id="addcartbtn" className="btn btn-primary">ADD CART</button>
					<button id="readmorebtn" className="btn btn-info">READ MORE</button>
				</div>
				</div>
            </div>
        )
    }

}
export default ItemsComponent;