import React, { Component } from 'react';
import styles from './styles'
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TaskItem from './../../components/TaskItem';


class TaskList extends Component {
    render() {
        const { classes, task, status } = this.props;
        return (
            <Grid item md={4} xs={12} key={status.value}>
                <Box mt={1} mb={1}><div className="classes.status"> {status.label}</div></Box>
                <div className="classes.wrapperListTask">
                    {
                        task.map(task => {
                            return (
                                <TaskItem task={task} status={status} key={task.id}></TaskItem>
                            )
                        })
                    }
                </div>
            </Grid>
        );
    }
}

export default withStyles(styles)(TaskList);