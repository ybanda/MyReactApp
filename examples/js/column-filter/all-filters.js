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

class CheckboxFilter extends React.Component {
  constructor(props) {
    super(props);
    this.filter = this.filter.bind(this);
    this.isFiltered = this.isFiltered.bind(this);
  }

  filter(event) {
    if (this.refs.nokCheckbox.checked && this.refs.okCheckbox.checked) {
      // all checkboxes are checked means we want to remove the filter for this column
      this.props.filterHandler();
    } else {
      this.props.filterHandler({ callback: this.isFiltered });
    }
  }

  isFiltered(targetValue) {
    if (targetValue === 'no') {
      return (this.refs.nokCheckbox.checked);
    } else {
      return (this.refs.okCheckbox.checked);
    }
  }

  cleanFiltered() {
    this.refs.okCheckbox.checked = true;
    this.refs.nokCheckbox.checked = true;
    this.props.filterHandler();
  }

  render() {
    return (
      <div>
        <input ref='okCheckbox' type='checkbox' className='filter' onChange={ this.filter } defaultChecked={ true } /><label>{ this.props.textOK }</label>
        <input ref='nokCheckbox' type='checkbox' className='filter' onChange={ this.filter } defaultChecked={ true } style={ { marginLeft: 30 + 'px' } } /><label>{ this.props.textNOK }</label>
      </div>
    );
  }
}

CheckboxFilter.propTypes = {
  filterHandler: React.PropTypes.func.isRequired,
  textOK: React.PropTypes.string,
  textNOK: React.PropTypes.string
};

CheckboxFilter.defaultProps = {
  textOK: 'OK',
  textNOK: 'Not OK'
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
      inStockDate: date
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
  return (
    <CheckboxFilter filterHandler={ filterHandler } textOK={ customFilterParameters.textOK } textNOK={ customFilterParameters.textNOK } />
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
        <TableHeaderColumn ref='name1' dataField='name' filter={ { type: 'TextFilter', placeholder: 'Please enter a value' } }>User Role</TableHeaderColumn>
        <TableHeaderColumn ref='name2' dataField='name' filter={ { type: 'RegexFilter', placeholder: 'Please enter a regex' } }>Task Name</TableHeaderColumn>
        <TableHeaderColumn ref='quality' dataField='quality' filter={ { type: 'SelectFilter', options: qualityType } } dataFormat={ enumFormatter } formatExtraData={ qualityType }>Channel</TableHeaderColumn>
        <TableHeaderColumn ref='quality' dataField='quality' filter={ { type: 'SelectFilter', options: qualityType } } dataFormat={ enumFormatter } formatExtraData={ qualityType }>MOC</TableHeaderColumn>
        <TableHeaderColumn ref='quality' dataField='quality' filter={ { type: 'SelectFilter', options: qualityType } } dataFormat={ enumFormatter } formatExtraData={ qualityType }>Is Employee</TableHeaderColumn>
        <TableHeaderColumn ref='quality' dataField='quality' filter={ { type: 'SelectFilter', options: qualityType } } dataFormat={ enumFormatter } formatExtraData={ qualityType }>Is Unsolicited</TableHeaderColumn>
        <TableHeaderColumn ref='isInStock' dataField='isInStock' filter={ { type: 'CustomFilter', getElement: getCustomFilter, customFilterParameters: { textOK: 'yes', textNOK: 'no' } } }>Product Is In Stock</TableHeaderColumn>
       
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
}

