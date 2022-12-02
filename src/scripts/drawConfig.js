import CONTROLS from '../constants/controls'

let drawConfig = {
  currentControl: CONTROLS.PENCIL,
  currentColor: null,
  radius: null,
  traceBuffer: [],
  trace: []
}

const setCurrentColor = color => {
  drawConfig = {
    ...drawConfig,
    currentColor: color
  }
}

const setRadius = radius => {
  drawConfig = {
    ...drawConfig,
    radius
  }
}

const setCurrentControl = control => {
  drawConfig = {
    ...drawConfig,
    currentControl: control
  }
}

const saveTraceBuffer = ({ x, y }) => {
  drawConfig = {
    ...drawConfig,
    traceBuffer: drawConfig.traceBuffer.concat({ x, y })
  }
}

const saveLastTraceBuffered = () => {
  if (!drawConfig.traceBuffer.length) {
    return
  }
  drawConfig = {
    ...drawConfig,
    trace: drawConfig.trace.concat([drawConfig.traceBuffer]),
    traceBuffer: []
  }
}

export {
  drawConfig,
  setCurrentColor,
  setRadius,
  setCurrentControl,
  saveTraceBuffer,
  saveLastTraceBuffered
}
