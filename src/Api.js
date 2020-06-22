import React, { Component } from 'react'


class WikiRand extends Component {
      state = {
          data:[],
      }


      fetchArticleList = () =>
      {
        const url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=random&rnlimit=5&format=json&origin=*'

        fetch(url)
          .then( result => result.json())
          .then( result => {
                 this.setState({
                     data: result.query.random,
                 })
          })
      }
       
      componentDidMount()
      {
        this.fetchArticleList();  
      }
          
      render() {
              const { data } = this.state;

              const result = data.map( (entry, index) => {
                  return <li key={index}><a target="_blank" rel="noopener noreferrer" href={`https://en.wikipedia.org/wiki/${entry.title}`}>{entry.title}</a></li>
              })

              return (
                    <section>
                      <input type="button" value="Fetch New List" onClick={this.fetchArticleList} />
                      <br/>
                      <ul>{result}</ul>
                    </section>
                )
              
          }      
}

export default WikiRand