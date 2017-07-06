import Header from './header'
import Footer from './footer'
import React, {Component} from 'react'

export default class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}