import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarSearch from '../components/CarSearch';
import { carSearchMapSelector, isCarSearchAvailable } from '../selectors/carSelector'
import * as Types from '../constants/ActionTypes'

export class SearchContainer extends Component {
  static propTypes = {
    carSearchMap: PropTypes.object,
    isCarOfTheWeekAvailable: PropTypes.bool
  }

  render(){
    const {carSearchMap, isCarSearchAvailable, onSearchSubmit} = this.props;
    return (
      <div>
      { !isCarSearchAvailable
        ? <span>Loading...</span>
        : <CarSearch carSearchMap={carSearchMap} onSearchSubmit={onSearchSubmit}/> }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  carSearchMap: carSearchMapSelector(state),
  isCarSearchAvailable: isCarSearchAvailable(state)
})

const mapDispatchToProps = dispatch => ({
  onSearchSubmit: (modelId) => dispatch({type: Types.SUBMIT_SEARCH, modelId: modelId}),
})

export default connect(
  mapStateToProps,
   mapDispatchToProps
)(SearchContainer)
