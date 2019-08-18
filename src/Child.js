import React from "react";
import {withRouter} from "react-router-dom";
class Child extends React.Component{
        constructor(props){
            super(props);
            this.state={item:""};
        }
        componentDidMount()
        {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.props.match.params.id}&appid=989aeb61637efc432e57044c6c5bd577`).then(
            (response)=>{
                return response.json()}).then((json)=>{this.setState({item:json.weather[0].description})})
                
        }
        render()
        {
            return(<p>{this.state.item}</p>);
        }
    }

export default withRouter(Child);