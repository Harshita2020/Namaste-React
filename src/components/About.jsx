import React from "react"
import User from "./User"
import UserClass from "./UserClass"

class About extends React.Component{
    constructor(props){
        super(props)
        this.state={}
        console.log("Parent Constructor!")
    }

    componentDidMount(){
        console.log("Parent Component Did Mount!")
    }
    render(){

        return (
            <>
            <h1>About Us!</h1>
            {/* <User />
            <hr/> */}
            
            <UserClass name={"Harshieee"} location={"Noida"} contact={"harshitaautocad111111@gmail.com"} /> 
            <UserClass name={"Mudit"} location={"Faridabad"} contact={"muditparashar@gmail.com"} /> 
            <hr/>
            </>
        )
    }

}
export default About