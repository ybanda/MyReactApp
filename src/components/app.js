import _ from 'lodash';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import UTubeSearch from 'youtube-api-search';
import {Router, Route, browserHistory} from 'react-router'
import Layout from './layout'
import Header from './header'
import Footer from './footer'

import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_details';
import AllFilter  from '../../examples/js/column-filter/all-filters';

const API_KEY='AIzaSyD3xMCbiLdA7oPyohavecPP_glB1F4AqFo';


/*const App = () => {
  return (
        <div>
           <h1> My ReactJs App</h1> 
            <br/>
            <SearchBar/>
        </div>
  );
}*/

class App extends Component{
  constructor(props){
    super(props);

    this.state={ 
      videos:[],
      selectedVideo:null
    };
    this.videoSearch('green tea');
 
  }

videoSearch(term){
     UTubeSearch({key:API_KEY,term:term},(videos)=>{
      //this.setState({videos:videos});
      this.setState({
        videos:videos,
        selectedVideo:videos[0]
    });
      console.log(videos);
    });
}

 render(){
   const videoSearch = _.debounce((term)=>{this.videoSearch(term)},300);
   return (
      
       <div>
            <SearchBar onSearchTermChange={videoSearch}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList 
              videos={this.state.videos}
              onVideoSelect={selectedVideo =>this.setState({selectedVideo})}/>
           <AllFilter />
         </div>
        
    );
  }
}

ReactDOM.render(<App/>,document.querySelector('.myApp'));
// const navbarInstance = (
 
// );

// ReactDOM.render(navbarInstance,document.querySelector('.myApp'))
