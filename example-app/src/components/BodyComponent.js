import React from 'react';
import '../css/bootstrap.min.css'
import '../css/bodycss.css'
import ItemsComponent from './ItemsComponent';
import LoginComponent from './LoginComponent';
import axios from 'axios';
// import data from '../data/itemdata.json'


class BodyComponent extends React.Component{

    constructor() {
        super();

        this.state = {
            items: null
        }

        }

    componentWillMount() {

            fetch('http://localhost:3001/hey', {
            "method":"GET",
            headers: {
                accept: "text/html,application/xhtml+xml,application/xml"
            }
        })
        .then((data)=> data.json())
        .then(data => this.setState({
            items: data
        })
        )
        .catch((err)=> console.log(err));

    }
    componentDidMount(){
        axios.get('/user').then((response) =>{
            console.log(response);
        }).catch((err)=>{
            console.log(err);
        });
    }

    render(){
        this.state.items && console.log(this.state.items);
        return(
            <div id = "body_content" className="container">
                {
                   false && <div><LoginComponent/></div>
                }
                <div className="row" id="firstrow">
                {
                    this.state.items &&  this.state.items.Items.map((item, index)=> (
                        <ItemsComponent key={index} item={item} className="col-sm-3" />
                    ))
                }
                </div>
            </div>
        )
    }
}
export default BodyComponent;
