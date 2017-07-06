import React,{Component} from 'react';
import {Link} from 'react-router'


export default class Header extends Component{
 render(){
return (
<div>

<Link to="/Home" activeClassName="active">Home</Link>
<Link to="/Sign-In" activeClassName="active">Sign In</Link>
<Link to="/Register" activeClassName="active">Register</Link>

{this.props.children}
</div>
)
}
}