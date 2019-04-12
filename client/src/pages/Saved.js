import React from "react";
import Container from "../components/Container";
import API from "../utils/API"

class Saved extends React.Component {
  state = {savedBooks: []}
  
  componentWillMount(){
    API.getBooks().then(
      (res) => {
        this.setState({savedBooks: res.data});
      }
    ).catch((err) => {console.log(err);
    }
    );
  }
  
  render(){
    console.log(this.state.savedBooks);
    return(
      <div>
        <Container savedBooks={this.state.savedBooks} path={this.props.match.path}/>
      </div>
    )  
  }
}



export default Saved;
