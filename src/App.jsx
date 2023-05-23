import React from "react";
import regal from "./image/regal.jpeg";


class App extends React.Component {

  state = {
    Person: {
      fullName: "Adewale Adeboye",
      bio: "I'm a MERN Stack Developer",
      profession: "Software Developer"
    },
    show: false
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  render() {
    return (
      <>
        {this.state.show && (
          <>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <img src={regal} alt="regal"></img>
            <h1>{this.state.Person.profession}</h1>
            <br></br>
          </>
        )}

        <button onClick={this.handleShowPerson}>click here</button>
        
      </>
    );
  }
}

export default App;
