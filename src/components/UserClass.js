import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
            location: this.props.location
        };
        // console.log("Constructor Called");
    }
    async componentDidMount(){
        // console.log("Component Mounted");
        // console.log(this.props.name + "Child Component Mounted");
        const data = await fetch("https://api.github.com/users/Gowtham-369");
        const jsonObj = await data.json();
        this.setState(jsonObj);

        this.timer = setInterval(()=>{
            // console.log("NAMASTE REACT");
        },1000);
    }

    componentDidUpdate(prevState, prevProps){
        // if(this.state.name !== prevState.name){
        //     // api call
        // }
        // console.log("Component Updated");
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        // console.log("Component Unmounted");
    }

    render(){
        const {name, location, avatar_url} = this.state;
        // console.log("Render Called");
        return (
            <div className="user-card">
                <img src={avatar_url}/>
                <h2>Name: {name}</h2>
                <h3>Location: {location || "USA"}</h3>
                <h4>Twitter: @GowthamRU1408</h4>
            </div>
        );
    }
}

export default UserClass;