import classnames from 'classnames'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import Button from '../control_components/Button.jsx'

import ToneSynth from '../module_components/ToneSynth.jsx'
import Sampler from '../module_components/Sampler.jsx'
import Sequencer from '../module_components/Sequencer.jsx'

import AutoFilterEffect from '../module_components/AutoFilterEffect.jsx'
import AutoPannerEffect from '../module_components/AutoPannerEffect.jsx'
import AutoWahEffect from '../module_components/AutoWahEffect.jsx'
import BitCrusherEffect from '../module_components/BitCrusherEffect.jsx'
import ChebyshevEffect from '../module_components/ChebyshevEffect.jsx'
import ChorusEffect from '../module_components/ChorusEffect.jsx'
import DistortionEffect from '../module_components/DistortionEffect.jsx'
import FeedbackDelayEffect from '../module_components/FeedbackDelayEffect.jsx'
import FreeverbEffect from '../module_components/FreeverbEffect.jsx'
import FrequencyShifterEffect from '../module_components/FrequencyShifterEffect.jsx'
import JCReverbEffect from '../module_components/JCReverbEffect.jsx'
import MidSideEffect from '../module_components/MidSideEffect.jsx'
import PhaserEffect from '../module_components/PhaserEffect.jsx'
import PingPongDelayEffect from '../module_components/PingPongDelayEffect.jsx'
import PitchShiftEffect from '../module_components/PitchShiftEffect.jsx'
import ReverbEffect from '../module_components/ReverbEffect.jsx'
import StereoWidenerEffect from '../module_components/StereoWidenerEffect.jsx'
import TremoloEffect from '../module_components/TremoloEffect.jsx'
import VibratoEffect from '../module_components/VibratoEffect.jsx'

import Channel from '../module_components/Channel.jsx'

export default class SynthRoom extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { isVisible, instruments, handlePropertyValueChange } = this.props
    const instrumentElements = []

    instruments.forEach((instrument, i) => {
      const instrumentModuleElements = []

      instrument.forEach((instrumentModule, i) => {
        const { id, name, type, node, settings } = instrumentModule

        const components = {
          ToneSynth: ToneSynth,
          Sampler: Sampler,
          Sequencer: Sequencer,
          AutoFilterEffect: AutoFilterEffect,
          AutoPannerEffect: AutoPannerEffect,
          AutoWahEffect: AutoWahEffect,
          BitCrusherEffect: BitCrusherEffect,
          ChebyshevEffect: ChebyshevEffect,
          ChorusEffect: ChorusEffect,
          DistortionEffect: DistortionEffect,
          FeedbackDelayEffect: FeedbackDelayEffect,
          FreeverbEffect: FreeverbEffect,
          FrequencyShifterEffect: FrequencyShifterEffect,
          JCReverbEffect: JCReverbEffect,
          MidSideEffect: MidSideEffect,
          PhaserEffect: PhaserEffect,
          PingPongDelayEffect: PingPongDelayEffect,
          PitchShiftEffect: PitchShiftEffect,
          ReverbEffect: ReverbEffect,
          StereoWidenerEffect: StereoWidenerEffect,
          TremoloEffect: TremoloEffect,
          VibratoEffect: VibratoEffect,
          Channel: Channel
        }

        const ComponentType = components[type]

        instrumentModuleElements.push(
          <ComponentType
            id={id}
            name={name}
            node={node}
            settings={settings}
            handlePropertyValueChange={handlePropertyValueChange}
            key={i}
          />
        )
      })

      instrumentElements.push(
        <div className="Row" key={i}>
          {instrumentModuleElements}
        </div>
      )
    })

    const classes = classnames({
      SynthRoom: true,
      visible: isVisible
    })

    return <div className={classes}>{instrumentElements}</div>
  }
}

SynthRoom.propTypes = {
  instruments: PropTypes.array.isRequired,
  handlePropertyValueChange: PropTypes.func.isRequired
}
