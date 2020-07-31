import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles'
import styles from './styles'
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';


class TaskForm extends Component {
    render() {
        const { open, currency, onClose, classes, theme, personName, name } = this.props;

        
        return (
            <Dialog open={open}
                onClose={onClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Đơn hàng mới</DialogTitle>
                <DialogContent>

                    <TextField
                        id="standard-select-currency"
                        select
                        label="Select"
                        value={currency}
                        onChange={onClose}
                        helperText="Nơi đến"
                    >
                    </TextField>

                    

                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={onClose} color="primary">
                        Apply
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default withStyles(styles)(TaskForm);