import React from "react";
import SearchResults from "../components/SearchResults";
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
    return(
      <div>
        <SearchForm handleChange={this.handleChange} handleSearchClick={this.handleSearchClick}/>
        <SearchResults bookData={this.state.bookData} path={this.props.match.path}/>
      </div>
    )  
  }
}



export default Search;
