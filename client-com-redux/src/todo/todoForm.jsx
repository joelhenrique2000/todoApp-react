import React from 'react';
import Grid from '../template/grid';
import IconButton from '../template/iconButton';
import { connect } from 'react-redux'
import { changeDescription } from '../actions/todoAction';
import { bindActionCreators  } from 'redux';

const TodoForm = props => {

    const keyHandler = (evt) => {
        if (evt.key === 'Enter') {
            evt.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (evt.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        <div role='form' className='todoFrom'>
            <Grid cols='12 9 10'>
                <input
                    id='description'
                    className='form-control'
                    placeholder='Adicione uma tarefa'
                    value={props.description}
                    onKeyUp={keyHandler}
                    onChange={props.changeDescription} />
            </Grid>
            <Grid cols='12 3 2'>
                <IconButton
                    style="primary"
                    icon="plus"
                    onClick={props.handleAdd} />
                <IconButton
                    style='info'
                    icon='search'
                    onClick={props.handleSearch} />
                <IconButton
                    style='default'
                    icon='close'
                    onClick={props.handleClear} />
            </Grid>
        </div>
    );
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => 
    bindActionCreators({ changeDescription }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)