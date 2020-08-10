import React from 'react';
import base64 from 'react-native-base64'
import Navbar from "./components/Navbar";
import Articles from "./components/Articles";
import Export from "./components/Export";

import './App.css';

const username = 'test';
const password = 'test';
const siteId = '20123';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { 
      articles: [],
      statusMessage: '',
      firstLoad: true
    };
  }

  render() {
    let statusMessage = '';

    if(this.state.firstLoad!==true && this.state.statusMessage!==''){
       statusMessage = "Article not found";
    } else if (this.state.articles.length===0) {
       statusMessage = "Search for articles";
    }

    return (
        <div className="App">
          
          <Navbar/>

          <div className="container-fluid">
            
            <div className="row">
              <div className="col-sm-4">

                <div className="card">
                  <div className="card-header">
                    <h5 className="my-0 font-weight-normal center">Article Lookup</h5>
                  </div>

                  <div className="card-body">
                    <form onSubmit={this.handleSubmit}>

                      <div className="form-group">
                         <label>Site Id:</label>  {siteId}
                      </div>

                      <div className="form-group">
                        <label>Content Structure Type:</label>
                        <select className="form-control"  name="contentStuctureId">
                          <option value="59781">Basic Content Structure (Local)</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label>Article Language:</label>

                        <select className="form-control" name="journalLanguageId">
                          <option value="en-US">en-US</option>
                          <option value="fr-FR">fr-FR</option>
                        </select>
                      </div>

                      <button type="submit" className="btn btn-lg btn-block btn-outline-primary" onClick={this.props.getNext}>Request Article</button>
                    
                    </form>

                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h5 className="my-0 font-weight-normal center">Options</h5>
                  </div>

                  <div className="card-body">

                    <Export articles={this.state.articles}/>

                  </div>

                </div>

              </div>

              <div className="col-sm-8">

              {statusMessage.length>0 ? (

                  <div className="card center">
                    <div className="card-body">
                      <i>{statusMessage}</i>
                    </div>
                  </div>

                ) : (

                  <Articles articles={this.state.articles}/>

                )
              }

              </div>
            </div>
          </div>
        </div>
    );
  }

  async handleSubmit(event) {

    event.preventDefault();

    const data = new FormData(event.target);

    this.setState({
       firstLoad: false
    });
    
    let structureId = data.get('contentStuctureId');
    let languageId = data.get('journalLanguageId');

    let headers = new Headers({ 
      'Accept': 'application/json',
      'Authorization': 'Basic ' + base64.encode(username + ":" + password),
      'Accept-Language': languageId
    });

    let domain_url = "http://localhost:8080/";
    let url =
      domain_url +
      "/o/headless-delivery/v1.0/sites/" +
      siteId +
      "/structured-contents?filter=(contentStructureId eq " +
      structureId +
      ") ";

    var requestOptions = {
      method: "GET",
      headers: headers,
      redirect: "follow",
    };
    
    await fetch(url, requestOptions, {
      mode: "no-cors", 
    })   
      .then(res => res.json())
      .then(
        (result) => {
          if(result.exception){
            this.setState({
              statusMessage:result.exception
            });
          } else {
            
            result.items.map((item, index1) => (
                item.contentFields.map((contentField, index2) => (
                    item.bodyContent = stripHtmlChars(contentField.value.data)
                ))
            ))

            this.setState({
              articles: result.items
            });
          }
        }
      )
      .catch(console.log);

    function stripHtmlChars(html){
       var tmp = document.createElement("DIV");
       tmp.innerHTML = html;
       return tmp.textContent || tmp.innerText || "";
    }

  }
}

export default App;