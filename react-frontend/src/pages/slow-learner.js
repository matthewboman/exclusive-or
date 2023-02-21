import { useState } from 'react'

import {
    AMP_ENV_INSTRUCTIONS,
    DEFAULT_INSTRUCTIONS,
    KEYBOARD_INSTRUCTIONS,
    LFO_INSTRUCTIONS,
    LPF_INSTRUCTIONS,
    OSC_INSTRUCTIONS
} from "../utils/slow-learner-instructions.js"
import "../utils/input-knobs.js"
import "../utils/slow-learner-synth.js"

const instructionsMapping = [
    { type: 'filter',     html: LPF_INSTRUCTIONS },
    { type: 'vca',        html: AMP_ENV_INSTRUCTIONS },
    { type: 'keyboard',   html: KEYBOARD_INSTRUCTIONS },
    { type: 'oscillator', html: OSC_INSTRUCTIONS },
    { type: 'lfo',        html: LFO_INSTRUCTIONS }
  ]

export default function SlowLearner() {
    const [info, setInfo] = useState(DEFAULT_INSTRUCTIONS)  

    const updateInstructions = type => {
        setInfo(instructionsMapping.find(i => i.type === type).html)
    }

    return (

        <main role="main" className="container content">
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-4">
        <div id="instructions" className="mb-30" dangerouslySetInnerHTML={{ __html: info || null }}>

        </div>
      </div>

      <div className="col-xs-12 col-sm-12 col-md-8 no-gutters digital-outline">
        <div className="row controls digital digital-outline">

          <div id="osc-type" className="col-3 digital-outline pa-10" onMouseEnter={() => updateInstructions('oscillator')}>
            <div className="orange">
              <div className="mb-20">
                Oscillator
                <span id="osc-type-tooltip" className="digital-outline orange float-right tootip">1</span>
              </div>
            </div>
            <label className="digital-radio orange">
              Sine
              <input type="radio" defaultChecked="checked" name="osc" title="sine" />
              <span className="digital-radio-light"></span>
            </label>
            <label className="digital-radio orange">
              Square
              <input type="radio" name="osc" title="square" />
              <span className="digital-radio-light"></span>
            </label>
            <label className="digital-radio orange">
              Sawtooth
              <input type="radio" name="osc" title="sawtooth" />
              <span className="digital-radio-light"></span>
            </label>
          </div>

          <div id="filter-control" className="col-3 digital-outline pa-10" onMouseEnter={() => updateInstructions('filter')}>
            <div className="orange mb-30">
              Filter
              <span id="filter-tooltip" className="digital-outline orange float-right tootip">2</span>
            </div>
            <div className="center-children">
              <input id="filter-cutoff" defaultValue="100" type="range" className="input-knob" data-diameter="80" data-fgcolor="#d27f1e"/>
            </div>
          </div>

          <div id="lfo" className="col-3 digital-outline pa-10" onMouseEnter={() => updateInstructions('lfo')}>
            <div className="orange mb-30">
              LFO
              <span id="lfo-tooltip" className="digital-outline orange float-right tootip">3</span>
            </div>
            <div className="center-children">
              <input id="lfo-rate" decaultValue="0" type="range" className="input-knob" data-diameter="80" data-fgcolor="#d27f1e"/>
            </div>
          </div>

          <div id="amp-env" className="col-3 digital-outline pa-10" onMouseEnter={() => updateInstructions('vca')}>
            <div className="orange">
              <div className="mb-20">
                Amp Envelope
                <span id="amp-env-tooltip" className="digital-outline orange float-right tootip">4</span>
              </div>
              <div>
                <input id="amp-attack"  defaultValue="0"   type="range" className="input-slider mh-10" data-height="100" data-width="16" data-fgcolor="#d27f1e"/>
                <input id="amp-decay"   defaultValue="100" type="range" className="input-slider mh-10" data-height="100" data-width="16" data-fgcolor="#d27f1e"/>
                <input id="amp-sustain" defaultValue="100" type="range" className="input-slider mh-10" data-height="100" data-width="16" data-fgcolor="#d27f1e"/>
                <input id="amp-release" defaultValue="0"   type="range" className="input-slider mh-10" data-height="100" data-width="16" data-fgcolor="#d27f1e"/>
              </div>
              <div>
                <span className="mh-12">A</span>
                <span className="mh-12">D</span>
                <span className="mh-12">S</span>
                <span className="mh-12">R</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 pa-10">
            <div id="keyboard" className="keyboard" onMouseEnter={() => updateInstructions('keyboard')}>
              <div className="key null dual">~<br/>`</div>
              <div className="key null dual">!<br/>1</div>
              <div className="key null dual">@<br/>2</div>
              <div className="key null dual">#<br/>3</div>
              <div className="key null dual">$<br/>4</div>
              <div className="key null dual">%<br/>5</div>
              <div className="key null dual">^<br/>6</div>
              <div className="key null dual">&<br/>7</div>
              <div className="key null dual">*<br/>8</div>
              <div className="key null dual">(<br/>9</div>
              <div className="key null dual">)<br/>0</div>
              <div className="key null dual">_<br/>-</div>
              <div className="key null dual">+<br/>=</div>
              <div className="key null backspace">Backspace</div>

              <div className="key null tab">Tab</div>
              <div className="key null letter">Q</div>
              <div id="w" className="key sharp-or-flat letter">W</div>
              <div id="e" className="key sharp-or-flat letter">E</div>
              <div className="key null letter">R</div>
              <div id="t" className="key sharp-or-flat letter">T</div>
              <div id="y" className="key sharp-or-flat letter">Y</div>
              <div id="u" className="key sharp-or-flat letter">U</div>
              <div className="key null letter">I</div>
              <div className="key null letter">O</div>
              <div className="key null letter">P</div>
              <div className="key null dual">&#123;<br/>[</div>
              <div className="key null dual">&#124;<br/>]</div>
              <div className="key letter dual slash null">|<br/>\</div>

              <div className="key null caps">Caps<br/>Lock</div>
              <div id="a" className="key natural letter">A</div>
              <div id="s" className="key natural letter">S</div>
              <div id="d" className="key natural letter">D</div>
              <div id="f" className="key natural letter">F</div>
              <div id="g" className="key natural letter">G</div>
              <div id="h" className="key natural letter">H</div>
              <div id="j" className="key natural letter">J</div>
              <div id="k" className="key natural letter">K</div>
              <div className="key null letter">L</div>
              <div className="key null dual">:<br/>;</div>
              <div className="key null dual">"<br/>'</div>
              <div className="key null enter">Enter</div>

              <div className="key shift null left">Shift</div>
              <div className="key null letter">Z</div>
              <div className="key null letter">X</div>
              <div className="key null letter">C</div>
              <div className="key null letter">V</div>
              <div className="key null letter">B</div>
              <div className="key null letter">N</div>
              <div className="key null letter">M</div>
              <div className="key null dual">&lt; <br/>,</div>
              <div className="key null dual">&gt; <br/>.</div>
              <div className="key null dual">?<br/>/</div>
              <div className="key shift null right">Shift</div>

              <div className="key null ctrl">Ctrl</div>
              <div null className="key null"><i className="fab fa-linux"></i></div>
              <div className="key null">Alt</div>
              <div className="key null space"></div>
              <div className="key null">Alt</div>
              <div className="key null"><i className="fab fa-linux"></i></div>
              <div className="key null">Prnt</div>
              <div className="key ctrl null">Ctrl</div>
            </div>
          </div> 
        </div> 

      </div>
    </div>
  </main>
    )
} 