import React from "react"
import User from "./User"
import UserClass from "./UserClass"
import UserContext from "../utils/UserContext"

class About extends React.Component{
    constructor(props){
        super(props)
        this.state={}
        // console.log("Parent Constructor!")
    }

    componentDidMount(){
        // console.log("Parent Component Did Mount!")
    }

    render(){

        return (
            <div style={{marginBottom:"160px"}}>
            <h1>About Us!</h1>
            {/* <User />
            <hr/> */}
            
            <UserClass name={"Harshieee"} location={"Noida"} contact={"harshitaautocad111111@gmail.com"} /> 
            <UserClass name={"Mudit"} location={"Faridabad"} contact={"muditparashar@gmail.com"} /> 
            <hr/>
            <UserContext.Consumer>
                {(data) => <h1>LOGGED IN USER: {data.loggedInUser}</h1>}
            </UserContext.Consumer>
            </div>
        )
    }

}
export default About