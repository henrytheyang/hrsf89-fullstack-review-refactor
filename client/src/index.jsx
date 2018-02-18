import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
  }

  search (term) {
    console.log(`${term} was searched`);
    $.ajax({
      type: 'POST',
      url: 'http://127.0.0.1:1128/repos',
      data: term,
      contentType: 'text/plain',
      success: (data) => {
        console.log('back to client!');
        console.log('client sees data = ', data);
        this.updateRepo(data);
      },
      failure: () => {console.log('Search error!')},
    })
  }

  updateRepo(input) {
    console.log('hey there')
    this.setState({
      repos: input,
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));