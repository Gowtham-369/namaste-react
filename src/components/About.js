import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component{
    constructor(props){
        super(props);
        // console.log("Parent Constructor Called");
    }
    componentDidMount(){
        // console.log("Parent Component Mounted");
    }
    render(){
        // console.log("Parent Render Called");
        return (
            <div>
                <h1>About Us</h1>
                <div>
                    LoggedIn User
                    <UserContext.Consumer>
                        {({loggedInUser}) => (<h2 className="font-bold text-lg">{loggedInUser}</h2>)}
                    </UserContext.Consumer>
                </div>
                <h2>We are Namaste React🙏🏻</h2>
                {/* <User name="Gowtham" location="Cincinnati" /> */}
                <UserClass name="Gowtham" location="Cincinnati" />
            </div>
        );
    }
}

export default About;