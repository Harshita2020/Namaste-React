import React from "react";
class UserClass extends React.Component {
  constructor(prop){
    super(prop);

    this.state = {
      count: 0,
    }
        console.log(this.props.name+` Constructor!`)

  }

  componentDidMount(){
    console.log(this.props.name+` Component Did Mount!`)
  }
  render() {
    const {name, location, contact} = this.props
    console.log(this.props.name+" Render")
    return (
      <div sx={{"padding":"50px"}}>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>COntact: {contact} </h4>

      </div>

    );
  }
}

export default UserClass