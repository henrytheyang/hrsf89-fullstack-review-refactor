import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }
/*
  enterToSubmit(event) {
    if (event.key === 'Enter') {
      console.log('Enter key pressed');
      console.log('this = ', this)
      this.search()
      this.props.onSearch(this.state.term);
    }
  }*/

  search() {
    this.props.onSearch(this.state.term);
  }

  render() {
    return (<div>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={this.state.terms} onChange={this.onChange.bind(this)} /*onKeyPress={this.enterToSubmit}*//>       
      <button onClick={this.search.bind(this)}> Add Repos </button>
    </div>) 
  }
}

export default Search;