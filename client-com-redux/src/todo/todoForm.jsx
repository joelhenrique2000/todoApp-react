import React from 'react';
import Grid from '../template/grid';
import IconButton from '../template/iconButton';
import { connect } from 'react-redux'
import { changeDescription, search } from '../actions/todoAction';
import { bindActionCreators } from 'redux';

class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this);
    }

    keyHandler(evt) {
        if (evt.key === 'Enter') {
            evt.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
        } else if (evt.key === 'Escape') {
            this.props.handleClear()
        }
    }

    componentWillMount() {
        this.props.search()
    }

    render() {
        return (
            <div role='form' className='todoFrom'>
                <Grid cols='12 9 10'>
                    <input
                        id='description'
                        className='form-control'
                        placeholder='Adicione uma tarefa'
                        value={this.props.description}
                        onKeyUp={this.keyHandler}
                        onChange={this.props.changeDescription} />
                </Grid>
                <Grid cols='12 3 2'>
                    <IconButton
                        style="primary"
                        icon="plus"
                        onClick={this.props.handleAdd} />
                    <IconButton
                        style='info'
                        icon='search'
                        onClick={this.props.handleSearch} />
                    <IconButton
                        style='default'
                        icon='close'
                        onClick={this.props.handleClear} />
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    description: state.todo.description
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        changeDescription,
        search
    }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)