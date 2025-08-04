import React from "react";
class UserClass extends React.Component {
  constructor(prop){
    super(prop);
    console.log("PROP",prop)

    this.state = {
      count: 0,
      count2:1
    }
  }
  render() {
    const {name, location, contact} = this.props
    const handleClick = () => {
      this.setState({
        count: this.state.count + 1 ,
        count2: this.state.count + 2,
      })
    }
    return (
      <div sx={{"padding":"50px"}}>
        <h1>Count: {this.state.count} </h1>
        <h1>Count2: {this.state.count2} </h1>
        <button onClick={handleClick}> Click Me!</button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>COntact: {contact} </h4>

      </div>

    );
  }
}

export default UserClass