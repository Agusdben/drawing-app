import CONTROLS from '../constants/controls'

export let drawConfig = {
  currentControl: CONTROLS.PENCIL,
  currentColor: null,
  radius: null,
  traceBuffer: [],
  trace: []
}

export const setCurrentColor = color => {
  drawConfig = {
    ...drawConfig,
    currentColor: color
  }
}

export const setRadius = radius => {
  drawConfig = {
    ...drawConfig,
    radius
  }
}

export const setCurrentControl = control => {
  drawConfig = {
    ...drawConfig,
    currentControl: control
  }
}

export const saveTraceBuffer = ({ x, y }) => {
  drawConfig = {
    ...drawConfig,
    traceBuffer: drawConfig.traceBuffer.concat({
      x,
      y,
      radius: drawConfig.radius,
      tool: drawConfig.currentControl,
      color: drawConfig.currentColor
    })
  }
}

export const saveLastTraceBuffered = () => {
  if (!drawConfig.traceBuffer.length) {
    return
  }
  drawConfig = {
    ...drawConfig,
    trace: drawConfig.trace.concat([drawConfig.traceBuffer]),
    traceBuffer: []
  }
}

export const setConfig = config => {
  drawConfig = {
    ...config
  }
}
