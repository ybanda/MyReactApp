/* eslint max-len: 0 */
/* eslint no-unused-vars: 0 */
import React from 'react';
import BootstrapTable from '../../../src/BootstrapTable';
import TableHeaderColumn from '../../../src/TableHeaderColumn';


const products = [];

const qualityType = {
  0: 'good',
  1: 'bad',
  2: 'unknown'
};

const channelType = {
  0: 'Mobile',
  1: 'Web',
  2: 'Paper',
  3:'channel 4',
  4:'channel 5'
};

const MOCType = {
 0: 'Mobile',
  1: 'Web',
  2: 'Paper',
  3:'channel 4',
  4:'channel 5'
};


function stringifyObject ( obj ) {
  if ( _.isArray( obj ) || !_.isObject( obj ) ) {
    return obj.toString()
  }
  var seen = [];
  return JSON.stringify(
    obj,
    function( key, val ) {
      if (val != null && typeof val == "object") {
        if ( seen.indexOf( val ) >= 0 )
          return
          seen.push( val )
          }
      return val
    }
  );
}


class CheckboxFilter extends React.Component {
  constructor(props) {
    super(props);
    this.filter = this.filter.bind(this);
    this.isFiltered = this.isFiltered.bind(this);
  }

  filter(event) {
   
    if (this.refs.okCheckbox.checked) {
      console.info('Inside of Filter Checked '+stringifyObject(this));
      // all checkboxes are checked means we want to remove the filter for this column
      this.props.filterHandler();
    } else {

      console.info('Inside of Filter Un-Checked ');
      this.props.filterHandler({ callback: this.isFiltered });
    }
  }

  isFiltered(targetValue) {
      console.info('Inside of isFiltered = '+targetValue);
    if (targetValue === 'Y') {

      console.info('Inside of isFiltered : if :: '+targetValue);
      return (this.refs.okCheckbox.checked);
    }
    else{
      console.info('Inside of isFiltered : else :: '+targetValue);
      return (this.refs.okCheckbox.checked=false);
    }
  }

  cleanFiltered() {
    console.info('Inside of cleanFiltered : '+ this.refs.okCheckbox.checked);
    this.refs.okCheckbox.checked = true;
    this.props.filterHandler();
  }

  render() {
    return (
      <div>
        <input ref='okCheckbox' type='checkbox' className='filter' onChange={ this.filter } defaultChecked={ true } /><label>{ this.props.textOK }</label>
      </div>
    );
  }
}





CheckboxFilter.propTypes = {
  filterHandler: React.PropTypes.func.isRequired,
  textOK: React.PropTypes.bool
};

CheckboxFilter.defaultProps = {
  textOK: 'Y'
 };





function addProducts(quantity) {
  const startId = products.length;
  const startDate = new Date(2015, 0, 1);
  const endDate = new Date();
  for (let i = 0; i < quantity; i++) {
    const date = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      quality: i % 3,
      price: Math.floor((Math.random() * 100) + 1),
      satisfaction: Math.floor(Math.random() * 6),
      isEmployee: i%3==0?"Y":"N",
      isUnsolicited: i%3!=0?"Y":"N"
    });
  }
}

addProducts(5);

function enumFormatter(cell, row, enumObject) {
  return enumObject[cell];
}

function dateFormatter(cell, row) {
  if (typeof cell !== 'object') {
    cell = new Date(cell);
  }

  return `${('0' + cell.getDate()).slice(-2)}/${('0' + (cell.getMonth() + 1)).slice(-2)}/${cell.getFullYear()}`;
}

const satisfaction = [ 0, 1, 2, 3, 4, 5 ];
function getCustomFilter(filterHandler, customFilterParameters) {
  console.log('filterHandler::'+filterHandler);
  return (
    <CheckboxFilter filterHandler={ filterHandler } textOK={ customFilterParameters.textOK }/>
  );
}





export default class AllFilters extends React.Component {
  render() {

    
    return (
      <BootstrapTable ref='table' data={ products }>
        <TableHeaderColumn dataField='id' isKey={ true }>
          S.No #
          <br/><a onClick={ this.handlerClickCleanFiltered.bind(this) } style={ { cursor: 'pointer' } }>clear filters</a>
        </TableHeaderColumn>
        <TableHeaderColumn ref='name1'    dataField='name' filter={ { type: 'TextFilter', placeholder: 'Please enter a value' } }>User Role</TableHeaderColumn>
        <TableHeaderColumn ref='name2' dataField='name' filter={ { type: 'RegexFilter', placeholder: 'Please enter a regex' } }>Task Name</TableHeaderColumn>
        <TableHeaderColumn ref='quality' dataField='quality' filter={ { type: 'SelectFilter', options: channelType } } dataFormat={ enumFormatter } formatExtraData={ channelType }>Channel</TableHeaderColumn>
        <TableHeaderColumn ref='quality' dataField='quality' filter={ { type: 'SelectFilter', options: MOCType } } dataFormat={ enumFormatter } formatExtraData={ MOCType }>MOC</TableHeaderColumn>
        <TableHeaderColumn ref='isEmployee' dataField='isEmployee' filter={ { type: 'CustomFilter', getElement: getCustomFilter, customFilterParameters: { textOK: 'Y'} } }></TableHeaderColumn>
        <TableHeaderColumn ref='isUnsolicited' dataField='isUnsolicited' filter={ { type: 'CustomFilter', getElement: getCustomFilter, customFilterParameters: { textOK: 'Y' } } }></TableHeaderColumn>
        <TableHeaderColumn ref='quality' dataField='quality' filter={ { type: 'CustomFilter', getElement: getCustomFilter, customFilterParameters: { textOK: 'Is Workflow Involved' } } }></TableHeaderColumn>
       
        </BootstrapTable>
    );
  }


  handlerClickCleanFiltered() {
    this.refs.name1.cleanFiltered();
    this.refs.name2.cleanFiltered();
    this.refs.quality.cleanFiltered();
    this.refs.price.cleanFiltered();
    this.refs.satisfaction.cleanFiltered();
    this.refs.inStockDate.cleanFiltered();
  }
  
        componentDidMount(){
          console.log('Inside of Do Mount');
          this.callService.bind(this);
           $.ajax({
      url: "https://jsonplaceholder.typicode.com/users"
    }).then(function(data) {
      console.log('Inside of Data ='+JSON.stringify(data));
        this.setState({
           
        });
    });

          console.log('Outside of Do Mount');
        }
        callService(){
          $.get("https://jsonplaceholder.typicode.com/users",
             function(data) {
              console.log('Data ='+data);
             }.bind(this));
              
      }

}

