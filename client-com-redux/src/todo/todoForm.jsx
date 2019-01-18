import React from 'react';
import Grid from '../template/grid';
import IconButton from '../template/iconButton';
import { connect } from 'react-redux'
import { changeDescription, search, add } from '../actions/todoAction';
import { bindActionCreators } from 'redux';

class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this);
    }

    keyHandler(evt) {

        const { add, search, description } = this.props

        if (evt.key === 'Enter') {
            evt.shiftKey ? search() : add(description)
        } else if (evt.key === 'Escape') {
            this.props.handleClear()
        }
    }

    componentWillMount() {
        this.props.search()
    }

    render() {
        const { add, search, description } = this.props

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
                        onClick={() => add(description)} />
                    <IconButton
                        style='info'
                        icon='search'
                        onClick={() => search()} />
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
        search,
        add
    }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)