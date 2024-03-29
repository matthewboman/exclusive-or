// React doesn't play well with inputs-as-knobs and key mapping requires parent to be focused
// so user Vanilla JS

import { AutoFilter, AmplitudeEnvelope, Destination, Filter, OmniOscillator } from 'tone'

// DOM elements
const ampAttack     = document.getElementById('amp-attack')
const ampDecay      = document.getElementById('amp-decay')
const ampSustain    = document.getElementById('amp-sustain')
const ampRelease    = document.getElementById('amp-release')
const filterCutoff  = document.getElementById('filter-cutoff')
const lfoRate       = document.getElementById('lfo-rate')
const oscType       = document.getElementById('osc-type')

const DEFAULT_OCTAVE  = 4
const DEFAULT_FILTER  = 20000
const DEFAULT_LFO     = 1
const DEFAULT_ROLLOFF = -48
const DEFAULT_ATTACK  = 0
const DEFAULT_DECAY   = 2
const DEFAULT_SUSTAIN = 1
const DEFAULT_RELASE  = 0

// Map key pressing/clicking to events.
const keyMapping = [
    { id: 'a', note: 'C' },
    { id: 'w', note: 'C#' },
    { id: 's', note: 'D' },
    { id: 'e', note: 'D#' },
    { id: 'd', note: 'E' },
    { id: 'f', note: 'F' },
    { id: 't', note: 'F#' },
    { id: 'g', note: 'G' },
    { id: 'y', note: 'G#' },
    { id: 'h', note: 'A' },
    { id: 'u', note: 'A#' },
    { id: 'j', note: 'B' },
    { id: 'k', note: 'Coct' },
  ]


// Initialize Oscillator
let octave     = 4
let oscillator = new OmniOscillator({ type: 'sine' })

let autoFilter = new AutoFilter(
	DEFAULT_LFO,
	DEFAULT_FILTER
).toDestination()

autoFilter.set({
	filter: {
		rolloff: DEFAULT_ROLLOFF
	}
})

// Tone Envelope ranges: attack 0-2, decay 0-2, sustain 0-1, release 0-5
let ampEnv = new AmplitudeEnvelope({
	attack: 0,
	decay: 2,
	sustain: 1,
	release: 0
}).toDestination()

oscillator.chain(ampEnv, autoFilter).start()

// Wrapper to handle octaves && pass to key or click events
const playNote = key => {
    const id   = key.id
    const note = key.note.match(/oct/)
        ? key.note.replace(/oct/, octave + 1)
        : `${key.note}${octave}`
  
    document.getElementById(id).classList.add('playing')
    oscillator.set({ frequency: note })
    autoFilter.toDestination().start()
    ampEnv.triggerAttack()
}
  
// Wrapper to pass to key or click events
const stopNote = key => {
    document.getElementById(key.id).classList.remove('playing')

    autoFilter.toDestination().stop()
    ampEnv.triggerRelease()
}

// Play note when key pressed.
document.addEventListener('keydown', e => {
    if (keyMapping.map(k => k.id).includes(e.key)) {
        const key = keyMapping.filter(k => k.id === e.key)[0]
  
        playNote(key)
    }
})
  
// Stop note when key lifted.
document.addEventListener('keyup', e => {
    if (keyMapping.map(k => k.id).includes(e.key)) {
        const key = keyMapping.filter(k => k.id === e.key)[0]

        stopNote(key)
    }
})

function init() {
    let loading = true

    console.log('hmmm',  document.getElementById('a')))    

    // workaround for React DOM
    // while (loading) {
    //     if (document.getElementById('a')) {
    //         loading = false

    //         // Play notes for click events
    //         keyMapping.forEach(key => {
    //             document.getElementById(key.id).addEventListener('mousedown', () => {
    //                 playNote(key)
    //             })
            
    //             document.getElementById(key.id).addEventListener('touchstart', () => {
    //                 playNote(key)
    //             })
            
    //             document.getElementById(key.id).addEventListener('mouseup', () => {
    //                 stopNote(key)
    //             })
            
    //             document.getElementById(key.id).addEventListener('touchend', () => {
    //                 stopNote(key)
    //             })
    //         })
    //     }
    // }

}



/**
 * Oscillator
 */

// Change oscillator waveform.
oscType.addEventListener('change', e => {
	const type = e.target.title

	oscillator.set({ type })
})


/**
 * Filter Cutoff
 */
filterCutoff.addEventListener('change', e => {
    // TODO: try log and exponential instead of linear
	const percentToHz = 20000 * (e.target.value / 100)
	const frequency   = percentToHz > 100 ? percentToHz : 100 // Filter screws up at low values

	console.log('cutoff frequency:', frequency)

	autoFilter.baseFrequency = frequency
})


/**
 * LFO
 */
lfoRate.addEventListener('change', e => {
	const frequency = e.target.value / 10

	autoFilter.set({ frequency })
})


/**
 * Amp envelope
 */
ampAttack.addEventListener('change', e => {
	const attack = 2 * (e.target.value / 100)

	ampEnv.set({ attack })
})

ampDecay.addEventListener('change', e => {
	const decay =  2 * (e.target.value / 100)

	ampEnv.set({ decay })
})

ampSustain.addEventListener('change', e => {
	const sustain = e.target.value / 100

	ampEnv.set({ sustain })
})

ampRelease.addEventListener('change', e => {
	const release = 5 * (e.target.value / 100)

	ampEnv.set({ release })
})