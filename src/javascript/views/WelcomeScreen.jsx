import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import Button from '../control_components/Button.jsx'

export default class WelcomeScreen extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { handleStartWebAudio } = this.props

    return (
      <div className="WelcomeScreen">
        <Button
          text="Start ADC SpaceSynth 2021"
          handleClick={handleStartWebAudio}
        />
      </div>
    )
  }
}

WelcomeScreen.propTypes = {
  handleStartWebAudio: PropTypes.func.isRequired
}
