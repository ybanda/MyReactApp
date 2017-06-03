import React,{Component} from 'react';



// const SearchBar =() =>{
//     return <input/>;
// }

class SearchBar extends Component {
    constructor(prop){
        super(prop);

        this.state={inputValue:'Default Value'};
    }

    render(){
        // return <input onChange={this.onInputChange}/>;
            return (
            <div>
                <input 
                    value ={this.state.inputValue}
                    onChange ={ 
                    event => {
                            this.setState({inputValue:event.target.value});
                            console.log(this.state.inputValue);
                             }
                         }/>
            </div>
            );
    }
    // onInputChange(event){
    //     console.log(event);
    // }
}
export default SearchBar;