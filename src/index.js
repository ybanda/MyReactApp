import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import UTubeSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

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

    this.state={ videos:[]};

    UTubeSearch({key:API_KEY,term:'green tea'},(videos)=>{
      //this.setState({videos:videos});
      this.setState({videos});
      console.log(videos);
    });
  }
 render(){ return (
        <div>
           <h1> My ReactJs App</h1> 
            <br/>
            <SearchBar/>
            <VideoList videos={this.state.videos}/>
        </div>
    );
  }
}

ReactDOM.render(<App/>,document.querySelector('.myApp'));


