import CONTROLS from '../constants/controls'

let drawConfig = {
  currentControl: CONTROLS.PENCIL,
  currentColor: null,
  radius: null
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

export { drawConfig, setCurrentColor, setRadius, setCurrentControl }
