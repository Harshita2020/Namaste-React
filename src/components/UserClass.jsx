import React from "react";
class UserClass extends React.Component {
  constructor(prop){
    super(prop);

    this.state = {
      userInfo:{
        name:"Dummy",
        location:"location",
        avatar_url: "https://tse1.mm.bing.net/th/id/OIP.jHvTOSF7924Ah63W7mozxQHaEo?pid=Api&P=0&h=180"
      }
    }

  }

  async componentDidMount(){
    // const response = await fetch("https://api.github.com/users/Harshita2020") 
    const response = await fetch("https://api.github.com/users/akshaymarch7") 
    const data = await response.json()
    console.log("DATA: ", data)
    this.setState({
      userInfo: data
    })
  }

  componentDidUpdate(){
    console.log("COmponent Did Update")
  }
  render() {
    console.log("DATA STATE: ", this.state.userInfo)
    // const {name, location, contact} = this.props
    const {name, followers, location, avatar_url} = this.state.userInfo
    return (
      <div sx={{"padding":"50px"}}>
        <img src={avatar_url}/>
        <h2>Name: {name}</h2>
        <h3>followers: {followers}</h3>
        <h4>location: {location} </h4>

      </div>

    );
  }
}

export default UserClass