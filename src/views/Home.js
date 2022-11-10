import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as apples from '../models/apples'
import Tree from '../components/Tree'
import Basket from '../components/Basket'
import ShakeButton from '../components/ShakeButton'

class Home extends Component {
  render () {
    const { apples, actions } = this.props
    return (
      <div id="home">
        <div className="box">
          <ShakeButton onClick={(apples) => actions.startAnimation('tree-shake', apples)} />
          <Tree className={apples.treeClass}
            apples={apples.apples} />
          <Basket />
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  apples: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    apples: state.apples
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(apples.actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
