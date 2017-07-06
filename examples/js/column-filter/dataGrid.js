/* eslint max-len: 0 */
import React from 'react';
import AllFilter from './all-filters';

class DataGrid extends React.Component {
  render() {
    return (
        <div>
           <div className='col-md-offset-1 col-md-8'>
                <div className='panel panel-default'>
                    <div className='panel-heading'>User Role Combinations</div>
                    <div className='panel-body'>
                        <AllFilter />
                    </div>
                </div>
            </div>
            </div>
       );
  }
}

export default DataGrid;
