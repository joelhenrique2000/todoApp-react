import React from 'react'

export default props => (
    <div role='form' className='todoFrom'>
        <div className='col-xs-12 col-sm-9 col-md-10'>
            <input id='description' className='form-control' placeholder='Adicione uma tareface'></input>
        </div>
        <div className='col-xs-12 col-sm-3 col-md-2'>
            <button className='btn btn-primary'>
                <i className='fa fa-plus'></i>
            </button>
        </div>
    </div>
);