/* eslint max-len: 0 */
import React from 'react';
import '../../../css/toastr.css';
import '../../../css/react-bootstrap-table.css';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';

class App extends React.Component {

  static propTypes = {
    children: React.PropTypes.node
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const examples = [ {
      text: 'Column Filter',
      href: 'column-filter'
    } ];

    const exampleMenuItems = examples.map((item) => {
      return (
        <li key={ item.href }>
          <a href={ `#/examples/${item.href}` }>{ item.text }</a>
        </li>
      );
    });
    return (
      <div>
        <nav className='navbar navbar-inverse'>
          <div className='container-fluid'>
            <div className='navbar-header'>
              <a className='navbar-brand' href='#'>react-bootstrap-table</a>
            </div>
            <div className='collapse navbar-collapse'>
              <ul className='nav navbar-nav'>
                <li>
                  <a href='#/getting-started'>Getting Started</a>
                </li>
                <li>
                 
                </li>
                <li className='dropdown'>
                  <a href='#' className='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>Examples <span className='caret'></span></a>
                  <ul className='dropdown-menu'>
                    { exampleMenuItems }
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Grid fluid>
          <Row>
            <Col md={ 12 }>
              { this.props.children }
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
