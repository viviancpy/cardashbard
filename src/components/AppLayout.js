import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

class AppLayout extends React.Component {
  navigateToHome = event => {
    this.props.onNavigate("/");
  };

  navigateToSearch = event => {
    this.props.onNavigate("/search");
  };

  render() {
    const { classes, children } = this.props;
    return (
      <div>
        <Paper className={classes.root}>
          <Button
            variant="extendedFab"
            aria-label="Car of the week"
            color="primary"
            className={classes.button}
            onClick={this.navigateToHome}>
             <FavoriteIcon className={classes.extendedIcon} />
             CAR OF THE WEEK
          </Button>
          <Button
            variant="extendedFab"
            aria-label="Search"
            color="primary"
            className={classes.button}
            onClick={this.navigateToSearch}>
             <SearchIcon className={classes.extendedIcon} />
             SEARCH
          </Button>
        </Paper>
        {children}
      </div>
    );
  }
}


AppLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  onNavigate: PropTypes.func.isRequired
};

export default withStyles(styles)(AppLayout);
