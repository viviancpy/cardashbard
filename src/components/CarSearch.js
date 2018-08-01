import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  paper:{
    margin: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
  },
  button: {
    margin: theme.spacing.unit,
  },
  formControl: {
    margin: theme.spacing.unit * 5,
    minWidth: 160,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class CarSearch extends React.Component {
  state = {
    make: '',
    model: '',
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
      this.props.onSearchSubmit(this.state.model);
  };

  render() {
    const { classes, carSearchMap } = this.props;
    const makeIds = Object.keys(carSearchMap);
    const models = carSearchMap.hasOwnProperty(this.state.make) ? carSearchMap[this.state.make].models : [];
    return (
      <form className={classes.root} autoComplete="off">
        <Paper className={classes.paper}>
          <Typography variant="headline" component="h2">
            Get more information of dream car now!
          </Typography>
          <Typography variant="title" component="h3">
            Please select make and model below:
          </Typography>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="make-helper">Make</InputLabel>
            <Select
              value={this.state.make}
              onChange={this.handleChange}
              input={<Input name="make" id="make-helper" />}
              displayEmpty
              className={classes.selectEmpty}
            >
              {makeIds.map(
                (makeId, idx) => (<MenuItem key={`make${idx}`} value={makeId}>{carSearchMap[makeId].name}</MenuItem>)
              )}
            </Select>
            <FormHelperText>Select Make</FormHelperText>
          </FormControl>

          <FormControl className={classes.formControl} disabled={models.length === 0}>
            <InputLabel htmlFor="model-helper">Model</InputLabel>
            <Select
              value={this.state.model}
              onChange={this.handleChange}
              input={<Input name="model" id="model-helper" />}
              displayEmpty
              className={classes.selectEmpty}
            >
              {models.map(
                (model, idx) => (<MenuItem key={`model${idx}`} value={model.id}>{model.name}</MenuItem>)
              )}
            </Select>
            <FormHelperText>Select Model by Make.</FormHelperText>
          </FormControl>

          <Button
            variant="contained"
            color="primary"
            disabled={!this.state.model}
            onClick={this.handleSubmit}
            className={classes.button}>
            Search
          </Button>
        </Paper>
      </form>
    );
  }
}

CarSearch.propTypes = {
  classes: PropTypes.object.isRequired,
  carSearchMap: PropTypes.object.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
};

export default withStyles(styles)(CarSearch);
