import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarDisplay from '../components/CarDisplay';
import { carToDisplaySelector, isCarToDisplayAvailable } from '../selectors/carSelector'

export class DisplayContainer extends Component {
  static propTypes = {
    carToDisplay: PropTypes.object,
    isCarToDisplayAvailable: PropTypes.bool
  }

  render(){
    const {carToDisplay, isCarToDisplayAvailable} = this.props;
    return (
      <div>
      { !isCarToDisplayAvailable
        ? <span>Loading...</span>
        : <CarDisplay car={carToDisplay} /> }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  carToDisplay: carToDisplaySelector(state, ownProps),
  isCarToDisplayAvailable: isCarToDisplayAvailable(state, ownProps)
})

export default connect(
  mapStateToProps
)(DisplayContainer)
