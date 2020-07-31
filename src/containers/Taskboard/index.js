import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from '../../constants';
import TaskList from './../../components/TaskList';
import TaskFrom from './../../components/TaskFrom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as taskActions from './../../actions/task';
import PropTypes from 'prop-types'

class Taskboard extends Component {
    state = {
        open: false
    };
componentDidMount() {
    const { taskActionCreators } = this.props;
    const { fetchListTaskRequest } = taskActionCreators;
    fetchListTaskRequest();
}


    renderBoard() {
        const { listTask } = this.props
        console.log(listTask)
        let xhtml = null;
        xhtml = (
            <Grid container spacing={3}>
                {
                    STATUSES.map((status) => {
                        const taskFiltered = listTask.filter(task => task.status === status.value);
                        console.log(taskFiltered)
                        return (
                            <TaskList key={status.value} task={taskFiltered} status={status} />
                        );
                    })}
            </Grid>
        );
        return xhtml;
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }

    openForm = () => {
        this.setState({
            open: true
        });
    }

    renderForm() {
        const { open } = this.state;
        let xhtml = null;
        xhtml = (
            <TaskFrom open={open} onClose={this.handleClose} />
        );
        return xhtml;
    }

    render() {
        const { classes, listTask } = this.props;
        return (
            <div className="classes.taskBoard">
                <Button variant="contained" color="primary" className="classes.button" onClick={this.openForm}>
                    <AddIcon /> Đơn hàng mới
                </Button>
                {this.renderBoard()}
                {this.renderForm()}
            </div>
        );
    }
}

Taskboard.propTypes = {
    classes: PropTypes.object,
    taskActionCreators: PropTypes.shape({
        fetchListTaskRequest: PropTypes.func
    }),
    listTask: PropTypes.array,
}

const mapStateToProps = state => {
    return {
        listTask: state.task.listTask,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        taskActionCreators: bindActionCreators(taskActions, dispatch)
    }
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Taskboard));