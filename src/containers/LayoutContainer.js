import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppLayout from '../components/AppLayout';
import * as Types from '../constants/ActionTypes'

export class LayoutContainer extends Component {
  render(){
    const {location, onNavigate, children} = this.props;
    return (
      <AppLayout
        onNavigate={onNavigate}
        children={children} />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  children: ownProps.children
})

const mapDispatchToProps = dispatch => ({
  onNavigate: (path) => dispatch({type: Types.NAVIGATE, path: path}),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LayoutContainer)
