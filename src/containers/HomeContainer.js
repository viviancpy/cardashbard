import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarDisplay from '../components/CarDisplay';
import { carOfTheWeekSelector, isCarOfTheWeekAvailable } from '../selectors/carSelector'

export class HomeContainer extends Component {
  static propTypes = {
    carOfTheWeek: PropTypes.object,
    isCarOfTheWeekAvailable: PropTypes.bool
  }

  render(){
    const {carOfTheWeek, isCarOfTheWeekAvailable} = this.props;
    return (
      <div>
      { !isCarOfTheWeekAvailable
        ? <span>Loading...</span>
        : <CarDisplay car={carOfTheWeek} /> }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  carOfTheWeek: carOfTheWeekSelector(state),
  isCarOfTheWeekAvailable: isCarOfTheWeekAvailable(state)
})

export default connect(
  mapStateToProps
)(HomeContainer)
