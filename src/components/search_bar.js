import React,{Component} from 'react';



// const SearchBar =() =>{
//     return <input/>;
// }

class SearchBar extends Component {
    constructor(prop){
        super(prop);

        this.state={inputValue:''};
    }

    render(){
        // return <input onChange={this.onInputChange}/>;
            return (
            <div className="search-bar">
                <input 
                    value ={this.state.inputValue}
                    onChange ={event => this.onInputChange(event.target.value)
                            /*{ this.setState({inputValue:event.target.value});
                                console.log(this.state.inputValue);
                             }*/
                    }/>
            </div>
            );
    }
     onInputChange(inputValue){
         console.log(inputValue);
         this.setState({inputValue});
         this.props.onSearchTermChange(inputValue);

     }
}
export default SearchBar;