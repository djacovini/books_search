import React from "react";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import API from "../utils/API"

class Search extends React.Component {
  state = {
    bookInput:"",
    bookData: []
  }
 
  
  handleChange(event){
    event.preventDefault();
    this.setState({bookInput: event.target.value})
  }
  
  handleSearchClick(event){
    event.preventDefault();
    API.searchBooks(this.state.bookInput)
    .then(
      (res) => {
        this.setState({bookData: res.data});
        this.setState({bookInput: ""});
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



export default Search;
