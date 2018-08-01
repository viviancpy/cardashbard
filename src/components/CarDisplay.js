import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    margin: theme.spacing.unit * 5,
    width: 800
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});

function CarDisplay(props) {
  const { classes, car } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={car.imageUrl}
          title={car.name}
        />
        <CardContent>
          <Typography gutterBottom variant="headline">
            {car.name} by {car.makeName}
          </Typography>
          <Typography gutterBottom variant="title">
            ${new Intl.NumberFormat().format(car.price)}
          </Typography>
          {car.review
            ? <Typography component="p">
                {car.review}
              </Typography>
            : null
          }
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

CarDisplay.propTypes = {
  classes: PropTypes.object.isRequired,
  car: PropTypes.object.isRequired
};

export default withStyles(styles)(CarDisplay);
