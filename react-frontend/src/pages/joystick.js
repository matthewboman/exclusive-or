import { PWMOscillator }    from 'tone'
import { useEffect, useRef, useState } from 'react'

// Set up OSC, elements
const MIDDLE_C  = 261
const MOD_RATIO = 50
const RADIUS    = 25
const osc       = new PWMOscillator(MIDDLE_C, 0).toDestination()

const withinBounds = (maxX, maxY, curX, curY) => curX < (maxX - RADIUS) && (curY * 2) < (maxY + RADIUS)

export default function Joystick() {
    const [hold, setHold]             = useState(false)
    const [position, setPosition]     = useState({ x: 0, y: 0 })
    const [initial, setInitial]       = useState(null)
    const [frequency, setFrequency]   = useState(MIDDLE_C)
    const [modulation, setModulation] = useState(MOD_RATIO)
    
    const joystick  = useRef(null)
    const container = useRef(null)

    useEffect(() => {
        setInitial(joystick.current.getBoundingClientRect())
        setInitial(container.current.getBoundingClientRect())
    }, [])


    const onMouseDown = (e) => {
        osc.start()

        const onMouseMove = e => {
            position.x += e.movementX
            position.y += e.movementY

            const el         = joystick.current
            const con        = container.current
            const difPitch   = initial.y - position.y
            const difMod     = -(initial.x - position.x) // TODO: not working
            const frequency  = MIDDLE_C + difPitch > 0 ? MIDDLE_C + difPitch : 0
            const modulation = difMod > 0 ? (difMod / MOD_RATIO) : 0

            osc.set({ frequency, modulationFrequency: modulation })

            if (el && withinBounds(con.offsetWidth, con.offsetHeight, position.x, Math.abs(position.y))) {
                console.log('max', con.offsetHeight)
                console.log('current', position.y)
                el.style.transform = `translate(${position.x}px, ${position.y}px)`
            }

            setPosition(position)
            setFrequency(frequency)
            setModulation(modulation)
        }

        const onMouseUp = () => {
            document.removeEventListener("mousemove", onMouseMove)
            document.removeEventListener("mouseup", onMouseUp)

            osc.stop()
        }

        document.addEventListener("mousemove", onMouseMove)
        document.addEventListener("mouseup", onMouseUp)
    }

    const onReset = () => {
        joystick.current.style.transform = `translate(0px, 0px)`

        osc.stop()

        setPosition({ x: 0, y: 0 })
        setFrequency(MIDDLE_C)
        setModulation(MOD_RATIO)
    }
    
    return (
        <div>
            <div className="digital mb-10">
                Frequency:
                <span>{ frequency }</span>
            </div>
            <div className="digital mb-10">
                PWM:
                <span>{ modulation }</span>
            </div>
            <div className="digital mb-10">
            <label className="digital-switch">
                Hold
                <input id="hold" type="checkbox" />
                <span className="digital-switch-light"></span>
            </label>
            </div>
            <div className="digital mb-10">
                <button onClick={onReset} className="hover digital ditial-btn digital-outline">Reset / Stop</button>
            </div>

            <div className="col-xs-12 col-sm-8 col-md-9">
                <div ref={container} className="digital-outline joystick-container">
                    <div ref={joystick} id="joystick" className="joystick" onMouseDown={onMouseDown}></div>
                </div>
            </div>
        </div>
    )
} 
